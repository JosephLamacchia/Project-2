export class Department {

    id_department: number;
    name_department: string;
    id_manager: number;

    constructor (id_department:number, name_department:string, id_manager:number) {
        this.id_department = id_department;
        this.name_department = name_department;
        this.id_manager = id_manager;

    }

}