const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor() {
    this._hat = hat;
    this._hole = hole;
    this._fieldCharacter = fieldCharacter;
    this._pathCharacter = pathCharacter;
  }

  fieldConstructor() {
    let userPosition = this._pathCharacter;
    let gameField = [];
    let i = 0;
    while (i < 10) {
      let fieldSection = [];
      let j = 0;
      while (j < 10) {
        //   return [this._fieldCharacter];
        fieldSection.push(this._fieldCharacter);
        if (j === 11) break;
        j++;
      }
      gameField.push(fieldSection);
      if (j === 11) break;
      i++;
    }
    // let fieldLayout = gameField.join('\n');
    // return fieldLayout;

    return gameField.join('\n');
  }

  get fieldLocator() {
    console.log(gameField);
  }

  get pathCharacter() {
    return this._pathCharacter;
  }
  //User Input Indicator
  set pathCharacter(newPosition) {
    console.log('this_.pathCharacter');
  }
}

//Instantiating the fieldConstructor
const myField = new Field();

// Game Field generator
console.log(myField.fieldConstructor());
// myField.pathCharacter = ()
console.log(myField.pathCharacter);
console.log(myField.fieldLocator);
