import { fiftyThousand, oneHundredThousand } from "../utils/constants/constants.js";
import { ConvertRp } from "../utils/convertNumber.js";
import { readline } from "../utils/readline.js";

export const creditValid50 = async () => {
    do {
        console.log("Credit");
        var amount = await readline.question("Input: ")
        if (amount < 0) {
            console.clear();;
            console.log("Error message: Amount cannot be negative.");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
        if (amount % fiftyThousand !== 0) {
            console.clear();;
            console.log(`Amount must be the multiples of ${ConvertRp(fiftyThousand)}`);
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
    } while (amount < 0 || amount % fiftyThousand !== 0);
    return amount;
}

export const creditValid100 = async () => {
    do {
        console.log("Credit");
        var amount = await readline.question("Input: ")
        if (amount < 0) {
            console.clear();;
            console.log("Error message: Amount cannot be negative.");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
        if (amount % oneHundredThousand !== 0) {
            console.clear();;
            console.log(`Amount must be the multiples of ${ConvertRp(oneHundredThousand)}`);
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
    } while (amount < 0 || amount % fiftyThousand !== 0);
    return amount;
}