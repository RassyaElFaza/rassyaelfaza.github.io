// arts
const main = document.querySelector('main');
const arts = document.querySelectorAll('.art img');
const divingButton = document.getElementById('diving-button');

arts.forEach((art) => {
  art.addEventListener('click', (e) => {
    const id = art.dataset.id;
    showArt(e, id);
  });
});

function showArt(e, id) {
  hideDivingButton();
  const box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = `
  <a href="" class="close">
    <img src="asset/images/close.png" />
  </a>
  <img src="asset/images/arts/${id}" />
  `;
  console.log(id);
  main.append(box);

  box.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    closeArt(box);
  });
}

function closeArt(box) {
  showDivingButton();
  box.remove();
}

function showDivingButton() {
  divingButton.style.display = 'unset';
}

function hideDivingButton() {
  divingButton.style.display = 'none';
}
// arts end
