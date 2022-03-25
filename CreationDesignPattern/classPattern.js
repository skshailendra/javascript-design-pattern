/**
 *  Create an object by class constructor
 */
class Student {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
}

// Create an object named : Ram
const ram = new Student("Ram", "India");

// Create another object
const david = new Student("David", "U.S.");

// Print both the object.
console.log(ram, david);
