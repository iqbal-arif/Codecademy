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
    this._isCheckOut = false;
  }

  get title() {
    return this._title;
  }

  toggleCheckOutStatus(isCheckedOut) {
    return (this._isCheckOut = isCheckedOut);
  }

  addRating(rating) {
    return this._ratings.push(rating);
  }

  getAverageRating(avgRating) {
    avgRating = this._ratings.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }
}

class Book extends Media {
  constructor(title, author) {
    super(title);
    this._author = author;
  }

  get author() {
    return this._author;
  }
}

class Movie extends Media {
  constructor(title, director) {
    super(title);
    this._director = director;
    this._runTime = 8;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
    this._runTime = 8;
  }

  get artist() {
    return this._artist;
  }

  get runTime() {
    return this._runTime;
  }
}
