import { displayMainMenu } from "../../utils/displayMainMenu.js"
import { readline } from "../../utils/readline.js"
import { balance } from "../balance/balance.js"
import { credit } from "../credit/credit.js"
import { debit } from "../debit/debit.js"
import { mutation } from "../mutation/mutation.js"

export const mainMenu = async (userId) => {
    while (true) {
        displayMainMenu();
        let answer = await readline.question("Input: ");
        switch (answer) {
            case '1':
                console.clear();;
                await balance(userId)
                break;
            case '2':
                console.clear();;
                await debit(userId);
                break;
            case '3':
                console.clear();;
                await credit(userId);
                break;
            case '4':
                console.clear();;
                await mutation(userId);
                break;
            case '5':
                process.exit(0);
            default:
                console.log("Invalid menu input");
                await readline.question("Press any key to continue...");
        }
        console.clear();;
    }
}