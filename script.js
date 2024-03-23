window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  const menuLinks = document.querySelectorAll('.menu-link');

function scrollToSection(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
}

menuLinks.forEach(link => link.addEventListener('click', scrollToSection));