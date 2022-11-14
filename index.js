import { Client } from "./Client.js";
import { Manager } from "./Employees/Manager.js"
import { Director } from "./Employees/Director.js"
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Director("Rodrigo", 10000, 12345678900);
director.registerPassword("12345")
const manager = new Manager("Pedro", 5000, 12333345678)
manager.registerPassword("123")
const client = new Client("Kami", 12398745600, "543")

const islogged = AuthenticationSystem.login(director, "12345");
const islogged1 = AuthenticationSystem.login(manager, "123");
const islogged2 = AuthenticationSystem.login(client, "54321")

console.log(islogged, islogged1, islogged2)

