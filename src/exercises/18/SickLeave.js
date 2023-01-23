import {Leave} from './Leave.mjs'

class SickLeave extends Leave{
    constructor(leaveAppliedDate,startDateOfLeave,endDateOfLeave){
        super(leaveAppliedDate,startDateOfLeave,endDateOfLeave,"Sick")
    }
}