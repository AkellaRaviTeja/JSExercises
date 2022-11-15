// Complete the function "getFullName", "checkVoteEligiblity" in the below object

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  checkVoteEligiblity: function () {
    this.age > 18
      ? console.log("Eligible to vote")
      : console.log("Not eligible to vote");
  },
};
employee.getFullName();
employee.checkVoteEligiblity();
