// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

export class Leave {
  //...
  constructor(leaveType, leaveStartDate, leaveEndDate) {
    //...
    this._leaveType = leaveType;
    this._leaveStartDate = leaveStartDate;
    this._leaveEndDate = leaveEndDate;
    this._leaveDays = this.calculateLeaveDays();
  }

  get leaveType() {
    return this._leaveType;
  }

  get leaveStartDate() {
    return this._leaveStartDate;
  }

  get leaveEndDate() {
    return this._leaveEndDate;
  }

  set leaveType(leaveType) {
    this._leaveType = leaveType;
  }

  set leaveStartDate(leaveStartDate) {
    this._leaveStartDate = leaveStartDate;
  }

  set leaveEndDate(leaveEndDate) {
    this._leaveEndDate = leaveEndDate;
  }

  calculateLeaveDays() {
    //...
    return this._leaveEndDate - this._leaveStartDate;
  }

  approveLeave() {
    //...
    if (this._leaveDays > 5) {
      console.log("Leave Rejected");
    } else {
      console.log("Leave approved");
    }
  }
}
