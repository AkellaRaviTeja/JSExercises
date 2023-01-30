// Get the full name of the new employee. See how you can execute the function "getFullName" on newEmployee object.
// - Comment your findings

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    //Copy the solution from the exercise before this.
    if(arguments.length !== 0) 
      return arguments[0] + " " + arguments[1]
    else
      return this.firstName + " " + this.lastName
  },
};

const newEmployee = {
  firstName: "New",
  lastName: "Employee"
};

console.log(employee.getFullName(newEmployee.firstName, newEmployee.lastName))
