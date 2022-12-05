// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

// exporting class to be able to import in next exercise.
export class Leave {
  //...
  constructor(name, reason, startDate, endDate) {
    this.name = name;
    this.reason = reason;
    this.startDate = startDate;
    this.endDate = endDate ? endDate : startDate;
    this.status = false;
  }
    
  showLeaveDetails() {
    console.log(`---- ` + (this.status ? 'granted' : 'not yet granted') + ` ----`)
    if(this.startDate === this.endDate) {
      console.log(`${this.name} kept leave on ${this.startDate} for ${this.reason}.\n`);
    }
    else {
      console.log(`${this.name} kept leave from ${this.startDate} to ${this.endDate} for ${this.reason}\n`);
    }

  }

  grantLeave = function(){
    this.status = true;
    console.log(`GRANTED LEAVE TO ${this.name.toUpperCase()}\n`);
  }
}

let johnLeave = new Leave("John", "marriage", "17/11/2022", "20/11/2022");
let raniLeave = new Leave("Rani", "anniversary", "18/11/2022");

johnLeave.showLeaveDetails();
raniLeave.showLeaveDetails();

johnLeave.grantLeave();

johnLeave.showLeaveDetails();
