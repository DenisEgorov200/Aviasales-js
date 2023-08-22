const radio = document.querySelector('.radio');

radio.addEventListener('click', (e) => {
  const radioButton = e.target.closest('.radio__button');

  if (!radioButton) return; // (2)

  if (!radio.contains(radioButton)) return;

  console.log(radioButton.value);
});
