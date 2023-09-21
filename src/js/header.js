const currentURL = window.location.href;

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
