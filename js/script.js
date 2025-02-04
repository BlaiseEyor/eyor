const navbar = document.getElementById('navbar');
// Initialement invisible
navbar.style.backgroundColor = 'rgba(13, 42, 90, 0)';
window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY;

  // Lorsque l'utilisateur commence à défiler, applique une couleur avec opacité fixe
  if (scrollPos > 0) {
    navbar.style.backgroundColor = 'rgba(13, 42, 90, 0.6)'; // Opacité fixe de 0.6
  } else {
    navbar.style.backgroundColor = 'rgba(13, 42, 90, 0)'; // Invisible quand l'utilisateur est en haut
  }
});

// Typewriter Effect
const texts = [
  "Formateur",
  "Développeur FullStack",
  "Technicien spécialisé en maintenance logicielle"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
  if (charcterIndex < texts[textIndex].length){
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed);
  }
  else{
      setTimeout(eraseText, 1000)
  }
}
function eraseText(){
  if(textElements.innerHTML.length > 0){
      textElements.innerHTML = textElements.innerHTML.slice(0,-1);
      setTimeout(eraseText, 50)
  }
  else{
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500)
  }
}
window.onload = typeWriter