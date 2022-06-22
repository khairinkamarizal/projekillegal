const bankBtn = document.querySelector('.container-card-bank');
const bankExtender = document.querySelector('.container-card--expander');
const htmlBankChange = `<i class="container-card__icon far fa-credit-card"></i>
      <p class="container-card__name">Banking Info</p>
      <i class="container-card__icon-show-more fas fa-chevron-up"></i>`;
const htmlBankNoChange = `<i class="container-card__icon far fa-credit-card"></i>
      <p class="container-card__name">Banking Info</p>
      <i class="container-card__icon-show-more fas fa-chevron-down"></i>`;
bankBtn.addEventListener('click', function(e) {
  bankExtender.classList.toggle('container-card--expander');
  if (bankBtn.innerHTML != htmlBankChange) {
    bankBtn.innerHTML = htmlBankChange;
  } else {
    bankBtn.innerHTML = htmlBankNoChange;
  }
});