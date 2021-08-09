export class Login {

    id: number ;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    manager: boolean;
    m_id :number;

    constructor(id: number, firstname: string, lastname: string, email : string,password : string,manager: boolean,m_id :number ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.manager=manager;
        this.m_id=m_id;
    }

}