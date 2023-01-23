import {Leave} from './Leave.mjs'

class MaternityLeave extends Leave{
    constructor(leaveAppliedDate,startDateOfLeave,endDateOfLeave){
        super(leaveAppliedDate,startDateOfLeave,endDateOfLeave,"Maternity")
    }
}
