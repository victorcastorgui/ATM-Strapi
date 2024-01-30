import { ATM } from "../../class/atm.js";
import { debitValid100, debitValid50 } from "../../controller/debitController.js";
import { nominalMenu } from "../../utils/nominalMenu.js";
import { readline } from "../../utils/readline.js";

const atm = new ATM;

export const debit = async (userId) => {
    while (true) {
        nominalMenu();
        let input = await readline.question("Input: ");
        let amount;
        let data;
        switch (input) {
            case '1':
                console.clear();;
                amount = await debitValid50(userId);
                data = await atm.postDebit(amount, userId);
                await debitMessage(data);
                return;
            case '2':
                console.clear();;
                amount = await debitValid100(userId);
                data = await atm.postDebit(amount, userId);
                await debitMessage(data);
                return;
            default:
                console.log("Invalid input, please choose 1 or 2.");
                await readline.question("Press any key to continue...")
        }
        console.clear();;
    }
}

const debitMessage = async (data) => {
    if (data) {
        console.log("Debit success");
        await readline.question("Press any key to back...")
        return;
    }

    await readline.question("Press any key to continue...")
    return;
}