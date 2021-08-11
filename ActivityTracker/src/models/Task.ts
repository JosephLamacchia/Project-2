export class Task {

    id : number;  
	taskdescription : string;  
	starttime : string; 
	duedate : string;
    status : string;
    comment : string;  
	e_id : number; 
	

    constructor (id? : number, taskdescription? : string,  starttime? : string, duedate? : string, status? : string, comment? : string,  e_id? : number,  ) 
        {
        
            this.id = id || 0;
            this.taskdescription = taskdescription || '';
            this.starttime = starttime || '';
            this.duedate = duedate || '';
            this.status = status || '';
            this.comment = comment || '';
            this.e_id = e_id || 0;
            

    }

}