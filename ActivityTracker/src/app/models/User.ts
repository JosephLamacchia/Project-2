export class User {

    id: number;
    email: string;
    password: string;

    constructor(id: number, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

}