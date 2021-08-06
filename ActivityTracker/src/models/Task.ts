export class Task {

    id_task : number;  
	taskname : string;  
	startdate : string; 
	starthour : number; 
	startminute : number; 
	starttmc : string; 
	enddate : string;  
	endhour : number; 
	endminute : number; 
	endtmc : string; 
	id_employee : number; 
	id_tasktype : number; 
	id_status : number; 
	id_taskpriority : number; 

    constructor (id_task : number, taskname : string,  startdate : string, starthour : number, startminute : number, 
        starttmc : string, enddate : string,  endhour : number, 
        endminute : number, endtmc : string, id_employee : number, 
        id_tasktype : number, id_status : number, id_taskpriority : number ) 
        {
        
            this.id_task = id_task;
            this.taskname = taskname;
            this.startdate = startdate;
            this.starthour = starthour;
            this.startminute = startminute;
            this.starttmc = starttmc;
            this.enddate = enddate;
            this.endhour = endhour;
            this.endminute = endminute;
            this.endtmc = endtmc;
            this.id_employee = id_employee;
            this.id_status = id_status;
            this.id_tasktype = id_tasktype;
            this.id_taskpriority = id_taskpriority;

    }

}