class Password {
  constructor() {
    this.alphabet = '';
  }

  addNumbers() {
    this.alphabet += '0123456789';
  }

  deleteNumbers() {
    this.alphabet = this.alphabet.replace('0123456789', '');
  }

  addLowerCaseCharacters() {
    this.alphabet += 'abcdefghijklmnopqrstuvwxyz';
  }

  deleteLowerCaseCharacters() {
    this.alphabet = this.alphabet.replace('abcdefghijklmnopqrstuvwxyz', '');
  }

  addUpperCaseCharacters() {
    this.alphabet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  deleteUpperCaseCharacters() {
    this.alphabet = this.alphabet.replace('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');
  }

  addDollarSign() {
    this.alphabet += '$';
  }

  deleteDollarSign() {
    this.alphabet = this.alphabet.replace('$', '');
  }

  addUnderscoreSign() {
    this.alphabet += '_';
  }

  deleteUnderscoreSign() {
    this.alphabet = this.alphabet.replace('_', '');
  }

  addAmpersandSign() {
    this.alphabet += '&';
  }

  deleteAmpersandSign() {
    this.alphabet = this.alphabet.replace('&', '');
  }

  addAsterixSign() {
    this.alphabet += '*';
  }

  deleteAsterixSign() {
    this.alphabet = this.alphabet.replace('*', '');
  }

  getRandomSymbol() {
    return this.alphabet[Math.trunc(Math.random() * this.alphabet.length)];
  }
}