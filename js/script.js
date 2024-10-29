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