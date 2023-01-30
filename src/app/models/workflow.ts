import {Status} from "./status.enum";

export class workflow {
    title: string;
    from: string;
    to: string;
    dueDate: Date;
    status: Status

    constructor(title: string, from: string, to: string, dueDate: Date, status: Status) {
        this.title = title;
        this.from = from;
        this.to = to;
        this.dueDate = dueDate;
        this.status = status;
    }
}