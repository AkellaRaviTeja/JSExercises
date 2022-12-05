// Extend the Leave class, to create different classes for different Leave types.

// imports Leave class from last exercise
import { Leave } from '../16/exercise'

class CasualLeave extends Leave {
    constructor(name, startDate, endDate) {
        super(name, "Holiday", startDate, endDate)
    }
}


class SickLeave extends Leave {
    constructor(name, startDate, endDate) {
        super(name, "sick", startDate, endDate)
    }
}


let johnLeave = new CasualLeave("John", "17/11/2022", "20/11/2022");
let raniLeave = new SickLeave("Rani", "18/11/2022");

johnLeave.showLeaveDetails();
raniLeave.showLeaveDetails();
