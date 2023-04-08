import { Leave } from "../16/exercise.js";
class SickLeave extends Leave {
    constructor(leaveStartDate, leaveEndDate) {
        super("Sick", leaveStartDate, leaveEndDate);
        this.limit = 5;
    }

    approveLeave() {
        if (this._leaveDays > this.limit) {
            console.log("Leave Rejected");
        } else {
            console.log("Leave approved");
        }
        sickLeavesLeft(this.limit - this._leaveDays);
    }

    sickLeavesLeft(limit) {
        this.limit = limit;
        console.log("Sick leaves left: " + this.limit);
    }
}