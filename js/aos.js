document.addEventListener('DOMContentLoaded', function () {
  if (window.AOS) {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    });
  }
});
