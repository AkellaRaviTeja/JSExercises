// Extend the Leave class, to create different classes for different Leave types.;
// import { Leave } from "../16/exercise.js";

import { Leave } from "../16/exercise.js";
class SickLeave extends Leave {
  constructor(name, age, reason = "sick Leave") {
    super(name, age);
    this.reason = reason;
  }
  generatingReason() {
    super.generateLeaveMessage();
  }
}

const sl = new SickLeave("Bhavana", 1);
sl.generatingReason();
class Vacation extends Leave {
  constructor(name, age, reason = "Vacation") {
    super(name, age);
    this.reason = reason;
  }
  generatingReason() {
    super.generateLeaveMessage();
  }
}
const v = new Vacation("Bhavana", 4);
v.generatingReason();

//static = a method or property that belongs to a class
//not any one object
// class Car {
//   static numberOfCars = 0;
//   static beginRace() {
//     console.log("The Race has begun");
//   }
//   constructor(model) {
//     this.model = model;
//     Car.numberOfCars += 1;
//   }
// }
// let car1 = new Car("Mustang");
// let car2 = new Car("Corvette");
// let car3 = new Car("Corvette");

// console.log(Car.numberOfCars);
// Car.beginRace();
