// Use Javascript modules to create seperate files for each of the Leave type classes.
// - Comment your understanding about import
// - Comment your understanding about export

// Import: Import came up with ES6, by using Import we can call the exported function anywhere in our project. so its easy to use we can create a function in a place and use it where we want. You can import a variable using import keyword. You can specify one of all the members that you want to import from a JavaScript file.

// Export:Export is used to export function so we can import that function anywhere in our project.You can export a variable using the export keyword in front of that variable declaration. You can also export a function and a class by doing the same.

import SickLeave from "./SickLeave.js";
import AnnualLeave from "./AnnualLeave.js";

const sickLeave = new SickLeave(new Date("2023-04-05"), new Date("2023-04-10"));
console.log(sickLeave.getReason()); // "Sick"

const AnualLeave = new AnnualLeave(
  new Date("2023-05-01"),
  new Date("2023-05-03")
);
console.log(AnualLeave.getReason()); // "anual"
