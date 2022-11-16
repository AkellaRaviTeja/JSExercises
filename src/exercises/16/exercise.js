// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

export class Leave {
  constructor(name, numberofdays) {
    this.name = name;
    this.numberofdays = numberofdays;
  }
  generateLeaveMessage() {
    console.log(
      `${this.name} is on leave for ${this.numberofdays} days because ${this.reason}`
    );
  }
  //...
}
// const Bhavana = new Leave("Bhavana", 2, "not feeling well");
// console.log(Bhavana);
// Bhavana.generateLeaveMessage();
