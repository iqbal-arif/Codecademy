const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(pathCharacter) {
    this._hat = hat;
    this._hole = hole;
    this._fieldCharacter = fieldCharacter;
    this._pathCharacter = pathCharacter;
  }

  fieldConstructor() {
    let gameField = [];
    let i = 0;
    while (i < 3) {
      let fieldSection = [];
      let j = 0;
      while (j < 3) {
        //   return [this._fieldCharacter];
        fieldSection.push(this._fieldCharacter);
        if (j === 4) break;
        j++;
      }
      gameField.push(fieldSection);
      if (j === 4) break;
      i++;
    }
    return gameField;
  }

  get pathCharacter() {
    console.log('initialPos');
    // initialPos = this._pathCharacter;
    // console.log((gameField[0][0] = initialPos));
    console.log((gameField[0][0] = this._pathCharacter));
  }
}
const myField = new Field(fieldCharacter, pathCharacter);

console.log(myField.fieldConstructor());
console.log(myField.pathCharacter);
