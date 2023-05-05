/*
***************
Build a Library
***************
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:
Book

    Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie

    Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD

    Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

*/
class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this.ratings;
  }

  toggleCheckOutStatus(isCheckedOut) {
    return this._isCheckedOut === true
      ? (isCheckedOut = true)
      : (isCheckedOut = false);
  }

  getAverageRating(avgRating) {
    return (avgRating = this._ratings.reduce((accumulator, currentValue) => {
      return Math.floor((accumulator + currentValue) / this._ratings.length);
    }, 0));
  }

  set isCheckedOut(checkOut) {
    return (this._isCheckedOut = checkOut);
  }

  addRating(rating) {
    return this._ratings.push(rating);
  }
}

// Book Sub-Class

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

//  Movie Sub-class

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// Instance of Book

const historyOfEverything = new Book(
  'A Short History of Nearly Everything',
  'Bill Bryson',
  544
);

// Calling toggleCheckOutStatus() and logging isCheckedOut value

console.log(historyOfEverything.toggleCheckOutStatus());

// Calling addRating Thrice

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Calling getAverageRating() and logging results

console.log(historyOfEverything.getAverageRating());

// Instance of Movie

const speed = new Movie('Speed', 'Jan de Bont', 116);

// Calling toggleCheckOutStatus() and logging isCheckedOut value

console.log(speed.toggleCheckOutStatus());

// Calling addRating Thrice

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Calling getAverageRating() and logging results

console.log(speed.getAverageRating());

// CD Sub-Class

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = ['Strick', 'Runner'];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  shuffle() {
    return Math.floor(Math.random() * this._songs.length);
  }
}

console.log(cdList.shuffle());
// Instance of CD

const cdList = new CD('Creativity', 'John Doe');

// Logging CD lists
console.log(cdList.songs);

// Calling toggleCheckOutStatus() and logging isCheckedOut value

console.log(cdList.toggleCheckOutStatus());

// Calling addRating Thrice

cdList.addRating(1);
cdList.addRating(5);

// Calling getAverageRating() and logging results

console.log(cdList.getAverageRating());
