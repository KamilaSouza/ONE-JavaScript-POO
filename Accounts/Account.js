//Abstract class - cant be instantiated
export class Account {

    constructor(inicialBalance, client, agency) {
        if (this.constructor == Account) {
            throw new Error("You should not instantiate an Account, it is an abstract class")
        }

        this._balance = inicialBalance;
        this._client = client;
        this._agency = agency;
    }

    // Abstract Method
    withdraw(value) {
        throw new Error("The method  withdraw, from Account, is abstract ")
    }

    _withdraw(value, tax) {
        const withdrawValue = tax * value;
        if (this._balance >= withdrawValue) {
            this._balance -= withdrawValue;
            return withdrawValue;
        }

        return 0;
    }

    deposit(value) {
        if (value <= 0) {
            return;
        }
        this._balance += value;
    }

    transfer(value, account) {
        const withdrawValue = this.withdraw(value);
        account.deposit(withdrawValue);

    }

    set client(newValue) {
        if (newValue instanceof Client) {
            this._client = newValue;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance
    }

}