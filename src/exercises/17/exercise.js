// Extend the Leave class, to create different classes for different Leave types.

import {Leave} from '../16/exercise.js';

export class SickLeave extends Leave {
  constructor(days) {
    super(days)
  }
  getLeaveDetails() {
    return `this is a Sick leave for ${this.getDaysCount()} days`
  }
}

// const sickLeave = new SickLeave(10)
// console.log(sickLeave.getLeaveDetails())