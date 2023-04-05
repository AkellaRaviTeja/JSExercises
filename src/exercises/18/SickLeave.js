import Leave from "./Leave.js";

class SickLeave extends Leave {
  constructor(startDate, endDate) {
    super(startDate, endDate);
    this.reason = "Sick";
  }
  viewDetails() {
    super.viewDetails();
    console.log(`Leave Type: ${this.reason}`);
  }
}

export default SickLeave;
