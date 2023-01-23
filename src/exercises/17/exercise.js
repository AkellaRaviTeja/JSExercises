// Extend the Leave class, to create different classes for different Leave types.
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
    setEndDateOfLeave(EndDateOfLeave){
      this.EndDateOfLeave=EndDateOfLeave;
    }
    setReasonForLeave(reasonForLeave){
      this.reasonForLeave=reasonForLeave;
    }
}  

class SickLeave extends Leave{
    constructor(leaveAppliedDate,startDateOfLeave,endDateOfLeave){
        super(leaveAppliedDate,startDateOfLeave,endDateOfLeave,"Sick")
    }
}

class MaternityLeave extends Leave{
    constructor(leaveAppliedDate,startDateOfLeave,endDateOfLeave){
        super(leaveAppliedDate,startDateOfLeave,endDateOfLeave,"Maternity")
    }
}

class vacationLeave extends Leave{
    constructor(leaveAppliedDate,startDateOfLeave,endDateOfLeave){
        super(leaveAppliedDate,startDateOfLeave,endDateOfLeave,"vacation")
    }
}
