// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

class Leave {
  //...
  constructor(days) {
    this.days = days
  }
  getDaysCount() {
    return this.days
  }
}

let leave = new Leave(10);
console.log(leave.getDaysCount())
