import Leave from "./Leave.js";

class AnnualLeave extends Leave {
  constructor(startDate, endDate) {
    super(startDate, endDate);
    this.reason = "AnualLeave";
  }

  viewDetails() {
    super.viewDetails();
    console.log(`Leave Type: ${this.reason}`);
  }
}

export default AnnualLeave;
