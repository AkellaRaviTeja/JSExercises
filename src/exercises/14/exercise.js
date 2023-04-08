// Get the full name of the new employee. See how you can execute the function "getFullName" on newEmployee object.
// - Comment your findings

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    //Copy the solution from the exercise before this.
    return this.firstName + " " + this.lastName;
  },
};

const newEmployee = {
  firstName: "New",
  lastName: "Employee",
  getFullName: employee.getFullName,
  // or in place of getFullName: employee.getFullName,
  // you can also write getFullName: employee.getFullName.bind(newEmployee)
  /* or in place of getFullName: employee.getFullName, this can also be done 
  __proto__: employee
  */
};

//const getFullName = employee.getFullName.call(newEmployee);  //This is one of the way it can be done.