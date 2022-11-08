export class Client {
    name;
    #cpf;

    get cpf() {
       return this.#cpf;
    }

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
    }
}