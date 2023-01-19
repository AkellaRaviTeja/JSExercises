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
  if (employeeRavi?.getExperience) {
    console.log(employeeRavi?.getExperience?.());
  }
}

// - Modify the above function to use optional chaining.
console.log(getExperienceOfRavi())