// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

class Leave {
  constructor(leaveAppliedDate,dateOfLeave,reasonForLeave){
    this.leaveAppliedDate=leaveAppliedDate;
    this.dateOfLeave=dateOfLeave;
    this.reasonForLeave=reasonForLeave;
  }
  getleaveAppliedDate(){
    return this.leaveAppliedDate;
  }
  getdateOfLeave(){
    return this.dateOfLeave;
  }
  getReasonForLeave(){
    return this.reasonForLeave;
  }
  setleaveAppliedDate(leaveAppliedDate){
    this.leaveAppliedDate=leaveAppliedDate;
  }
  setdateOfLeave(dateOfLeave){
    this.dateOfLeave=dateOfLeave;
  }
  setReasonForLeave(reasonForLeave){
    this.reasonForLeave=reasonForLeave;
  }
}
