import { Account } from "./Account.js.js";

export class CurrentAccount extends Account {
    static accountCounter = 0;

    constructor(client, agency) {
        super(0, client, agency);
        CurrentAccount.accountCounter += 1;
    }

    withdraw(value) {
        const tax = 1.1;
        return super._withdraw(value, tax)
    }
}