// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

class Leave {
  constructor(leaveAppliedDate,startDateOfLeave,endDateOfLeave,reasonForLeave){
    this.leaveAppliedDate=leaveAppliedDate;
    this.startDateOfLeave=startDateOfLeave;
    this.endDateOfLeave=endDateOfLeave;
    this.reasonForLeave=reasonForLeave;
  }
  getLeaveAppliedDate(){
    return this.leaveAppliedDate;
  }
  getStartDateOfLeave(){
    return this.startDateOfLeave;
  }
  getEndDateOfLeave(){
    return this.endDateOfLeave;
  }
  getReasonForLeave(){
    return this.reasonForLeave;
  }
  setLeaveAppliedDate(leaveAppliedDate){
    this.leaveAppliedDate=leaveAppliedDate;
  }
  setStartDateOfLeave(startDateOfLeave){
    this.startDateOfLeave=startDateOfLeave;
  }
  setEndDateOfLeave(endDateOfLeave){
    this.endDateOfLeave=endDateOfLeave;
  }
  setReasonForLeave(reasonForLeave){
    this.reasonForLeave=reasonForLeave;
  }
}
