export class Employee {

    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    manager: boolean;
    m_id: number;

    constructor(id: number, email: string, password: string, firstname: string,  lastname: string, manager: boolean, m_id:number) {    

        this.id = id;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.manager = manager;
        this.m_id = m_id;
    }

}