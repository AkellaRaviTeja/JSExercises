// Use Javascript modules to create seperate files for each of the Leave type classes.
// - Comment your understanding about import
// - Comment your understanding about export


//main.js
export const  Leave = class {
   constructor(name, duration, reason) {
      this.name = name;
      this.duration = duration; //duration in days
      this.reason = reason;
   }
   //Here we can set the class variables by using "this" keyword in the constructor method.

   Apply() {
      console.log(`I ${this.name}, want leave for ${this.duration} days ${this.reason}.`)
   }
}

//sickLeave.js
import { Leave } from './main.js'
const sickLeave = new Leave('Hema', 2, "due to fever");

//vacationLeave.js
import { Leave } from './main.js'
const vacationLeave = new Leave("Hema", 3, "for vacation")

//import : "import" declaration is used to access the code from the exporting file.
//         The accessed code can't be changed in the exported file. We can only make use of it. 

//export : "export" declaration is used to make the code accessible for the importing file.
//        Importing file can't modify the code in the exporting file.  