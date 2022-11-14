import { Account } from "./Account.js";

export class SavingsAccount extends Account {
    constructor(inicialBalance, client, agency) {
        super(inicialBalance, client, agency);
    }

    withdraw(value) {
        const tax = 1.02;
        return super._withdraw(value, tax)
    }
}