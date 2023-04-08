// Extend the Leave class, to create different classes for different Leave types.
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

class CasualLeave extends Leave {
    constructor(leaveStartDate, leaveEndDate) {
        super("Casual", leaveStartDate, leaveEndDate);
        this.limit = 10;
    }

    approveLeave() {
        if (this._leaveDays > this.limit) {
            console.log("Leave Rejected");
        } else {
            console.log("Leave approved");
        }
        casuaLeavesLeft(this.limit - this._leaveDays);
    }

    casuaLeavesLeft(limit) {
        this.limit = limit;
        console.log("Casual leaves left: " + this.limit);
    }
}


