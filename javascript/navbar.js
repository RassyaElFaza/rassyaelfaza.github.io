const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

opened = false;

toggle.addEventListener('click', () => {
  if (opened == false) {
    opened = true;
    openMenu();
  } else {
    opened = false;
    closeMenu();
  }
});

function openMenu() {
  toggle.style.transform = 'translateX(-10rem)';
  menu.style.transform = 'translateX(0)';
}

function closeMenu() {
  toggle.style.transform = 'translateX(0)';
  menu.style.transform = 'translateX(100%)';
}
