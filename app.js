const mainForm = document.querySelector('#main-form');
const row = document.querySelector('.row');
const numbersSwitch = document.querySelector('#numbers');
const lowerCaseSwitch = document.querySelector('#lower-characters');
const upperCaseSwitch = document.querySelector('#upper-characters');
const dollarSignSwitch = document.querySelector('#dollar-sign');
const underscoreSignSwitch = document.querySelector('#underscore-sign');
const ampersandSignSwitch = document.querySelector('#ampersand-sign');
const asterixSignSwitch = document.querySelector('#asterix-sign');
const spinner = document.querySelector('#spinner');

const password = new Password();

let isNumbersSwitchChanged = false;
let isLowerCaseSwitchChanged = false;
let isUpperCaseSwitchChanged = false;
let isDollarSignSwitchChanged = false;
let isUnderscoreSignSwitchChanged = false;
let isAmpersandSignSwitchChanged = false;
let isAsterixSignSwitchChanged = false;

numbersSwitch.addEventListener('change', e => {
  if (!isNumbersSwitchChanged) {
    isNumbersSwitchChanged = true;
    password.addNumbers();
  } else {
    isNumbersSwitchChanged = false;
    password.deleteNumbers();
  }
});

lowerCaseSwitch.addEventListener('change', e => {
  if (!isLowerCaseSwitchChanged) {
    isLowerCaseSwitchChanged = true;
    password.addLowerCaseCharacters();
  } else {
    isLowerCaseSwitchChanged = false;
    password.deleteLowerCaseCharacters();
  }
});

upperCaseSwitch.addEventListener('change', e => {
  if (!isUpperCaseSwitchChanged) {
    isUpperCaseSwitchChanged = true;
    password.addUpperCaseCharacters();
  } else {
    isUpperCaseSwitchChanged = false;
    password.deleteUpperCaseCharacters();
  }
});

dollarSignSwitch.addEventListener('change', e => {
  if (!isDollarSignSwitchChanged) {
    isDollarSignSwitchChanged = true;
    password.addDollarSign();
  } else {
    isDollarSignSwitchChanged = false;
    password.deleteDollarSign();
  }
});

underscoreSignSwitch.addEventListener('change', e => {
  if (!isUnderscoreSignSwitchChanged) {
    isUnderscoreSignSwitchChanged = true;
    password.addUnderscoreSign();
  } else {
    isUnderscoreSignSwitchChanged = false;
    password.deleteUnderscoreSign();
  }
});

ampersandSignSwitch.addEventListener('change', e => {
  if (!isAmpersandSignSwitchChanged) {
    isAmpersandSignSwitchChanged = true;
    password.addAmpersandSign();
  } else {
    isAmpersandSignSwitchChanged = false;
    password.deleteAmpersandSign();
  }
});

asterixSignSwitch.addEventListener('change', e => {
  if (!isAsterixSignSwitchChanged) {
    isAsterixSignSwitchChanged = true;
    password.addAsterixSign();
  } else {
    isAsterixSignSwitchChanged = false;
    password.deleteAsterixSign();
  }
});

mainForm.addEventListener('submit', e => {
  spinner.classList.remove('d-none');
  spinner.classList.add('d-block');

  setTimeout(() => {
    spinner.classList.remove('d-block');
    spinner.classList.add('d-none');

    let result = '';

    for (let i = 0; i < +document.querySelector('#length').value; i++) {
      result += password.generateRandomSymbol();
    }

    row.insertAdjacentHTML('afterend', `
      <div class="p-3 my-2 border rounded rounded-sm" style="background-color: #fff;">
        <p class="lead text-center m-0" style="font-size: 2rem; color: #000;">${ result }</p>
      </div>
    `);
  }, 1800);

  e.preventDefault();
});