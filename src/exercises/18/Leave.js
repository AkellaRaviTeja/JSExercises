class Leave {
  constructor(startDate, endDate, reason) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.reason = reason;
    this.status = "pending";
  }

  getstartDate() {
    return this.startDate;
  }

  getendDate() {
    return this.endDate;
  }

  getReason() {
    return this.reason;
  }
  getStatus() {
    return this.status;
  }
  viewDetails() {
    console.log(`
        Start Date: ${this.startDate}
        End Date: ${this.endDate}
        Reason: ${this.reason}
        Status: ${this.status}
      `);
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
}

export default Leave;
