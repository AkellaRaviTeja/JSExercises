// Extend the Leave class, to create different classes for different Leave types.

import Leave from "../16/exercise.js";
export class SickLeave extends Leave {
  constructor(firstName, lastName, id, gender) {
    super(firstName, lastName, id, gender);
    this.reason = "Sick";
  }
  show() {
    console.log(this.display() + " applying " + this.reason + " Leave");
  }
}
export class CasualLeave extends Leave {
  constructor(firstName, lastName, id, gender) {
    super(firstName, lastName, id, gender);
    this.reason = "Casual";
  }
  show() {
    console.log(this.display() + " applying " + this.reason + " Leave");
  }
}
