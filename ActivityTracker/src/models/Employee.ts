export class Employee {

    id: number;
    email: string;
    firstName: string;
    lastName: string;
    isManager: boolean;
    password: string;

    constructor(id: number, email: string, password: string, firstName: string,
        middleName: string, lastName: string, address: string,
        phone: string, department_id: number, isManager: boolean) {    

        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isManager = isManager;
    }

}