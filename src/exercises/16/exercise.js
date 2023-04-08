// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

class Leave {
  constructor(leaveType, startDate, endDate, reason) {
    this.leaveType = leaveType;
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
      Leave Type: ${this.leaveType}
      Start Date: ${this.startDate}
      End Date: ${this.endDate}
      Reason: ${this.reason}
      Status: ${this.status}
    `);
  }
}

const leaveRequest = new Leave(
  "sick",
  "2023-04-10",
  "2023-04-12",
  "I have a cold"
);

// view the details of the leave request
leaveRequest.viewDetails();

// approve the leave request
leaveRequest.approve();

leaveRequest.viewDetails();
