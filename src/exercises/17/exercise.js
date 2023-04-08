// Extend the Leave class, to create different classes for different Leave types.
class Leave {
  constructor(startDate, endDate, reason) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.reason = reason;
    this.status = "pending";
  }

  approve() {
    this.status = "approved";
  }

  reject() {
    this.status = "rejected";
  }

  cancel() {
    this.status = "cancelled";
  }

  viewDetails() {
    console.log(`
        Start Date: ${this.startDate}
        End Date: ${this.endDate}
        Reason: ${this.reason}
        Status: ${this.status}
      `);
  }
}

class SickLeave extends Leave {
  constructor(startDate, endDate, reason) {
    super(startDate, endDate, reason);
    this.leaveType = "sick";
  }

  viewDetails() {
    super.viewDetails();
    console.log(`Leave Type: ${this.leaveType}`);
  }
}

class AnnualLeave extends Leave {
  constructor(startDate, endDate, reason) {
    super(startDate, endDate, reason);
    this.leaveType = "annual";
  }

  viewDetails() {
    super.viewDetails();
    console.log(`Leave Type: ${this.leaveType}`);
  }
}

//usage
const sickLeaveRequest = new SickLeave(
  "2023-04-10",
  "2023-04-12",
  "I have a cold"
);
sickLeaveRequest.viewDetails();

const annualLeaveRequest = new AnnualLeave(
  "2023-06-01",
  "2023-06-05",
  "Vacation"
);
annualLeaveRequest.viewDetails();
annualLeaveRequest.approve();
annualLeaveRequest.viewDetails();
