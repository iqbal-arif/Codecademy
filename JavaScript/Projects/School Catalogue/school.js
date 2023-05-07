/*
*****************
School Catalogue
*****************
Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:
School

    Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
    Getters: all properties have getters
    Setters: the numberOfStudents property has a setter
    Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

Primary

    Includes everything in the School class, plus one additional property
    Properties: pickupPolicy (string)

Middle

    Does not include any additional properties or methods

High

    Includes everything in the School class, plus one additional property
    Properties: sportsTeams (array of strings)

If you’re looking for a challenge, create the constructor() and getters for the four classes above. Then, use the setter and methods specifications in steps five, six, and seven to finish the project.
*/

// School Class

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`;
  }

  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[
      Math.floor(Math.random() * (substituteTeachers.length - 1))
    ];
  }

  set numberOfStudents(newNumberOfStudent) {
    typeof this._numberOfStudents === 'number'
      ? (this._numberOfStudents = newNumberOfStudent)
      : 'Invalid input: numberOfStudents must be set to a Number.';

    return (this._numberOfStudents = newNumberOfStudent);
  }
}

// Primary Sub-Class

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Middle Sub-Class

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

//  HighSchool Sub-class

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, high, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    this._sportsTeams.forEach((player) => console.log(player));
  }
}

// PrimarySchool Instances

const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

// Calling Quick Facts for PrimarySchool Instance

lorraineHansbury.quickFacts();

// Calling School Substitute Teachers list

console.log(
  School.pickSubstituteTeacher([
    'Jamal Crawford',
    'Lou Williams',
    'J. R. Smith',
    'James Harden',
    'Jason Terry',
    'Manu Ginobli',
  ])
);

// HighSchool Instances

const alSmith = new HighSchool('Al E. Smith', 415, [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field',
]);

// Listing the Sports Teams

console.log(alSmith.sportsTeams);

// Middle Instances

const johnDoe = new MiddleSchool('john Doe', 575);

console.log(johnDoe);
