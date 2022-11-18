alert('This is just a demo website');

const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

let isOpen = false;

toggle.addEventListener('click', () => {
  if (isOpen == false) {
    isOpen = true;
    openMenu();
  } else {
    isOpen = false;
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
