const numbersSwitch = document.querySelector('#numbers');
const lowerCaseSwitch = document.querySelector('#lower-characters');
const upperCaseSwitch = document.querySelector('#upper-characters');
const dollarSignSwitch = document.querySelector('#dollar-sign');
const underscoreSignSwitch = document.querySelector('#underscore-sign');
const ampersandSignSwitch = document.querySelector('#ampersand-sign');
const asterixSignSwitch = document.querySelector('#asterix-sign');

const password = new Password();

numbersSwitch.addEventListener('change', () => {
  console.log('IT WORKS!')
});
