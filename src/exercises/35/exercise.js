// Optional chaining
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

const employeeRavi = {
  firstName: "Ravi",
  lastName: "Teja",
  experience: 8,
  getFullname: () => {
    return `${firstName},${lastName}`;
  },
};

function getExperienceOfRavi() {
  return employeeRavi?.experience;
}
console.log(getExperienceOfRavi());
// - Modify the above function to use optional chaining.
