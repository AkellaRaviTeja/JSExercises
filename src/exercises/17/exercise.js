// Extend the Leave class, to create different classes for different Leave types.

class Leave {
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
  


// const sickLeave = new Leave('Hema', 2, "due to fever");
// const vacationLeave = new Leave("Hema", 3, "for vacation")

// sickLeave.Apply()
// vacationLeave.Apply()