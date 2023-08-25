document.getElementById('hamburger').addEventListener('click', (event) => {
  event.target.classList.toggle('active');
  let element_navMenu = document.getElementById('navMenu');
  element_navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item a').forEach((selectedElement) => {
  selectedElement.addEventListener('click', (event) => {
      let element_hamburger = document.getElementById('hamburger');
      element_hamburger.classList.remove('active');
      let element_navMenu2 = document.getElementById('navMenu');
      element_navMenu2.classList.remove('active');
  });
});
