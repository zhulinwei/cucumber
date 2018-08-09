const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constuctor(number) {
    this.number = number;
  }

  setTo(number) {
    this.number = number;
  }

  increateBy(number) {
    this.number += number;
  }
}

setWorldConstructor(CustomWorld);
