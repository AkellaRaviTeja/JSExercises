// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

export default class Leave {
  //...
  constructor(firstName, lastName, id, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.gender = gender;
  }
  display() {
    return (
      this.firstName +
      " " +
      this.lastName 
    );
  }
}

