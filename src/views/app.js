import { readline } from "../utils/readline.js";
import { login } from "./login/login.js";
import { register } from "./register/register.js";

export const App = async () => {
    while (true) {
        printMenu();
        let input = await readline.question("Input: ");
        switch (input) {
            case '1':
                console.clear();;
                await register();
                break;
            case '2':
                console.clear();;
                await login();
                break;
            default:
                console.log("Invalid input. Please choose 1 or 2.");
                await readline.question("Press any key to continue...");
        }
        console.clear();;
    }
}


function printMenu() {
    console.log("Welcome to DIGI ATM");
    console.log("Menu:");
    console.log("1. Register");
    console.log("2. Login");
}