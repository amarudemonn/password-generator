const numbersSwitch = document.querySelector('#numbers');
const lowerCaseSwitch = document.querySelector('#lower-characters');
const upperCaseSwitch = document.querySelector('#upper-characters');
const dollarSignSwitch = document.querySelector('#dollar-sign');
const underscoreSignSwitch = document.querySelector('#underscore-sign');
const ampersandSignSwitch = document.querySelector('#ampersand-sign');
const asterixSignSwitch = document.querySelector('#asterix-sign');

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
