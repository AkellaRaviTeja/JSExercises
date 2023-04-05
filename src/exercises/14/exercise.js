// Get the full name of the new employee. See how you can execute the function "getFullName" on newEmployee object.
// - Comment your findings

//Ans: In the example, when we call employee.getFullName, the value of this will be bound to object newEmployee, even when getFullName is not a method of newEmployee.

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const newEmployee = {
  firstName: "New",
  lastName: "Employee",
};
const fullName = employee.getFullName.call(newEmployee);
console.log(fullName);
