// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

class Leave {
   constructor(name,duration, reason) {
      this.name = name;
      this.duration = duration; //duration in days
      this.reason = reason;
   }
   //Here we can set the class variables by using "this" keyword in the constructor method.

   Apply() {
      console.log(`I ${this.name}, want leave for ${this.duration} days ${this.reason}.`)
   }  
}

// const newLeave = new Leave("Hema", 3, "to go to vacation")
// newLeave.Apply()