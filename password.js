class Password {
  constructor() {
    this.alphabet = '';
  }

  addNumbers() {
    this.alphabet += '0123456789';
  }

  addLowerCaseCharacters() {
    this.alphabet += 'abcdefghijklmnopqrstuvwxyz';
  }

  addUpperCaseCharacters() {
    this.alphabet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  addDollarSign() {
    this.alphabet += '$';
  }

  addUnderscoreSign() {
    this.alphabet += '_';
  }

  addAmpersandSign() {
    this.alphabet += '&';
  }

  addAsterixSign() {
    this.alphabet += '*';
  }

  getRandomSymbol() {
    return this.alphabet[Math.trunc(Math.random() * this.alphabet.length)];
  }
}