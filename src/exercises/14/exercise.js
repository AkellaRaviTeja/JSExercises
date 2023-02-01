// Get the full name of the new employee. See how you can execute the function "getFullName" on newEmployee object.
// - Comment your findings

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    //Copy the solution from the exercise before this.
    console.log(`${this.firstName} ${this.lastName}`)
  },
};

const newEmployee = {
  firstName: "New",
  lastName: "Employee",
};

employee.getFullName.call(newEmployee);

//I used call() function to call the method in employee object  on newEmployee object.
//Then the getFullName method is accessible in employee object.
