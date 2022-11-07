class Client {
    name;
    cpf;
}

class CurrentAccount {
    agency;
    #balance = 0;

    withdraw(value) {
        if (this.#balance >= value) {
            this.#balance -= value;
            console.log(this.#balance)
            return value;
        }
    }

    deposit(value) {
        if (value <= 0) {
            return;
        }
        this.#balance += value;
        console.log(this.#balance)
    }
}

const client1 = new Client();
client1.name = "Ricardo";
client1.cpf = 11122233309;

const client2 = new Client();
client2.name = "Alice";
client2.cpf = 11122233308;


const CurrentAccountRicardo = new CurrentAccount();
CurrentAccountRicardo.agency = 1001;


CurrentAccountRicardo.deposit(100);
CurrentAccountRicardo.deposit(100);
CurrentAccountRicardo.deposit(100);
CurrentAccountRicardo.withdraw(50);
const withdrawValue = CurrentAccountRicardo.withdraw(50);



console.log(CurrentAccountRicardo);
console.log(withdrawValue);
