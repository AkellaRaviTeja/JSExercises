// Complete the function "getFullName", "checkVoteEligiblity" in the below object

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
  },
  checkVoteEligiblity: function () {
      return this.age >= 18;
  },
};



console.log(employee.getFullName());
console.log(employee.checkVoteEligiblity());