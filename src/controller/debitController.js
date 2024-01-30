import { ATM } from "../class/atm.js";
import { fiftyThousand, oneHundredThousand } from "../utils/constants/constants.js";
import { readline } from "../utils/readline.js";

const atm = new ATM;

export const debitValid50 = async (userId) => {
    const balance = await atm.getBalance(userId);
    do {
        console.log("Debit");
        var amount = await readline.question("Input: ")
        if (amount < 0) {
            console.clear();;
            console.log("Error message: Amount cannot be negative.");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
        if (amount > balance.data.balance) {
            console.clear();;
            console.log("Error message: Your balance is not enough.");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
        if (amount % fiftyThousand !== 0) {
            console.clear();;
            console.log("Amount must be the multiples of Rp. 50.000,00.");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
    } while (amount < 0 || amount > balance.data.balance || amount % fiftyThousand !== 0);
    return amount;
}

export const debitValid100 = async (userId) => {
    const balance = await getBalance(userId);
    do {
        console.log("Debit");
        var amount = await readline.question("Input: ")
        if (amount < 0) {
            console.clear();;
            console.log("Error message: Amount cannot be negative.");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
        if (amount > balance.data.balance) {
            console.clear();;
            console.log("Error message: Your balance is not enough.");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
        if (amount % oneHundredThousand !== 0) {
            console.clear();;
            console.log("Amount must be the multiples of Rp. 100.000,00.");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
    } while (amount < 0 || amount > balance.data.balance || amount % fiftyThousand !== 0);
    return amount;
}