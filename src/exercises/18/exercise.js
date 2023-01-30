// Use Javascript modules to create seperate files for each of the Leave type classes.
// - Comment your understanding about import
// - Comment your understanding about export


import { SickLeave } from "../17/exercise.js";

// here the import i used variable import 
//Modules with functions or variables can be stored in any external file.

// There are two types of exports: Named Exports and Default Exports.

// Named Exports
// Let us create a file named person.js, and fill it with the things we want to export.

// You can create named exports two ways. In-line individually, or all at once at the bottom.

// Default Exports
// Let us create another file, named message.js, and use it for demonstrating default export.

// You can only have one default export in a file.
const sickLeave = new SickLeave(10)
console.log(sickLeave.getLeaveDetails())

