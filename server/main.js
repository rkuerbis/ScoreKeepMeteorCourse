import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

  //  ES6 Classes Introduction

  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      // Hi! I am Andrew.
//      return 'Hi! I am ' + this.name + '.';
      return `Hi! I am ${this.name}.`;
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }

  class Employee extends Person {

    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }

    getGreeting() {
      if (this.title) {
        return `Hi! I am ${this.name}.  I work as a ${this.title}.`;
      } else {
        return super.getGreeting();
      }

    }

    hasJob() {
      return !!this.title;   //  exists = true, doesn't exist = false
    }
  }



class Programmer extends Person {

  constructor(name, age = 0, preferredLanguage = 'Assembly') {
    super(name, age);
    this.preferredLanguage = preferredLanguage;
  }

  getGreeting() {
    if (this.preferredLanguage) {
      return `Hi! I am ${this.name}.  I work as a ${this.preferredLanguage} developer.`;
    } else {
      return super.getGreeting();
    }

  }

}



  let me = new Employee('Andrew', 25, 'Instructor');
  console.log(me, me.getGreeting(), me.getPersonDescription(), me.hasJob());

  let me1 = new Employee('Mike');
  console.log(me1, me1.getGreeting(), me1.getPersonDescription(), me1.hasJob());

  let me2 = new Programmer('Andrew', 25, 'Full Stack');
  console.log(me2, me2.getGreeting());

  let me3 = new Programmer('Andrew', 25);
  console.log(me3, me3.getGreeting());



});



// Object Spread Operator
let user = {
  name: 'Andrew',
  location: 'Philadelphia',
  age: 0
};

let person = {
  ...user,  // spread operator, age overridden to age=25
  age: 25

};

console.log(person);


// Object Property Shorthand

let bike = 'Scott';
let stuff = {
  bike: bike,
  laptop: 'Mac'
};
let stuff1 = {
  bike,
  laptop: 'Mac'
};

console.log(stuff);

let house = {
  bedrooms: 2,
  bathrooms: 1.5,
};

let yearBuilt = 1995;

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5,
//   yearBuilt: 1995,
//   flooring: 'Carpet'
// }

let house1 = {
  ...house,
  bedrooms: 3,
  yearBuilt,
  flooring: 'Carpet'

}
console.log(house1);
