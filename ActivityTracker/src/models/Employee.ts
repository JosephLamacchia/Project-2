export class Employee {

    id: number;
    email: string;
    firstName: string;
    lastName: string;
    isManager: boolean;
    password: string;
    m_id: number;

    constructor(id: number, email: string, password: string, firstName: string,  lastName: string, isManager: boolean, m_id:number) {    

        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isManager = isManager;
        this.m_id = m_id;
    }

}