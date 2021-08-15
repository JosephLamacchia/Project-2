export class Task {

    id : number;  
	taskdescription : string;  
	startdate : number; 
	duedate : number;  
	e_id : number; 
	status : string;

    constructor (id : number, taskdescription : string,  startdate : number, duedate : number,  
        e_id : number, status : string) 
        {
        
            this.id = id;
            this.taskdescription = taskdescription;
            this.startdate = startdate;
            this.duedate = duedate;
            this.e_id = e_id;
            this.status = status;

    }

}