export class Employee {
    constructor(name, salary, cpf) {
        this._name = name;
        this._salary = salary;
        this._cpf = cpf;

        this._bonification = 1;
        this._password;
    }

    registerPassword(password) {
        this._password = password;
    }

    autenthicate(password) {
        return password == this._password;
    }
}