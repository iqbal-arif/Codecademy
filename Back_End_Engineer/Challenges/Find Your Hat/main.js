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
    return gameField.join('\n');
  }

  get pathCharacter() {
    return this._pathCharacter;
  }

  set pathCharacter(newPosition) {
    console.log('this_.pathCharacter');
  }
}
const myField = new Field();

console.log(myField.fieldConstructor());
// console.log(gameField[0][2]);
// myField.pathCharacter = ()
console.log(myField.pathCharacter);
