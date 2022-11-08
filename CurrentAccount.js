import { Client } from "./client.js";

export class CurrentAccount {
    static accountCounter = 0;
    agency;
    #client;
    #balance = 0;

    constructor(client, agency){
        this.agency = agency;
        this.client = client;
        CurrentAccount.accountCounter +=1;
    }

    withdraw(value) {
        if (this.#balance >= value) {
            this.#balance -= value;
            return value;
        }
    }

    deposit(value) {
        if (value <= 0) {
            return;
        }
        this.#balance += value;
    }

    transfer(value, account) {
        const withdrawValue = this.withdraw(value);
        account.deposit(withdrawValue);

    }

    get client() {
        return this.#client;
    }

    set client(newValue) {
        if (newValue instanceof Client) {
            this.#client = newValue;
        }
    }

    get balance() {
        return this.#balance
    }
}