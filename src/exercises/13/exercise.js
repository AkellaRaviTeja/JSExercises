// Complete the function "getFullName", "checkVoteEligiblity" in the below object

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {console.log(`${this.firstName} ${this.lastName}`)},
  checkVoteEligiblity: function () {
    if (this.age > 18) { console.log("Eligible to vote") }
    else{console.log("Not eligible to vote")}
  },
};

