const cliqueNoInput = document.querySelectorAll('input');

function handleClick(event) {
  cliqueNoInput.forEach((item) => {
    item.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');
}

cliqueNoInput.forEach((item) => {
  item.addEventListener('click', handleClick);
})
