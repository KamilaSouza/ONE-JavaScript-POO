import { Client } from "./client.js";
import { CurrentAccount } from "./CurrentAccount.js";

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 11122233308);

const currentAccountRicardo = new CurrentAccount(client1, 1001);
const currentAccountAlice = new CurrentAccount(client2, 1001);

currentAccountRicardo.deposit(500);
currentAccountRicardo.transfer(200, currentAccountAlice)

console.log(
    " Account owner name:", currentAccountRicardo.client.name, "\n",
    "CPF:", currentAccountRicardo.client.cpf, "\n",
    "Agency:", currentAccountRicardo.agency, "\n",
    "Balance:", currentAccountRicardo.balance
);

console.log(currentAccountAlice, "Balance:", currentAccountAlice.balance)
console.log(CurrentAccount.accountCounter)
