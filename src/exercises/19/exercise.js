// Comment below what did you understand from the previous 3 exercises about
// - prototype
// - __proto__

/* 
protoype of a class has access to all the properties and methods in it
It can be accessed by all the instances created
If there are 100 instances for a particular class
and same code written tthere will be duplication of code
and wastage of resources will be there
*/

/*
__proto__ is property defined for every instance
it has all the properties and methods in it
 */

class Car {
  constructor(name, color) {
    (this.name = name), (this.color = color);
  }
}

const c1 = new Car("Brezza", "white");
console.log(Car.prototype);
console.log(c1.__proto__);
console.log(Car.prototype === c1.__proto__);
