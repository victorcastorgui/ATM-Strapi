import { ATM } from "../../class/atm.js";
import { creditValid100, creditValid50 } from "../../controller/creditController.js";
import { nominalMenu } from "../../utils/nominalMenu.js";
import { readline } from "../../utils/readline.js";

const atm  = new ATM;

export const credit = async (userId) => {
    while (true) {
        nominalMenu()
        let input = await readline.question("Input: ")
        let amount;
        let data;
        switch (input) {
            case '1':
                console.clear();;
                amount = await creditValid50();
                data = await atm.postCredit(amount, userId);
                await creditMessage(data);
                return;
            case '2':
                console.clear();;
                amount = await creditValid100();
                data = await atm.postCredit(amount, userId);
                await creditMessage(data);
                return;
            default:
                console.log("Invalid input, please choose 1 or 2.");
                await readline.question("Press any key to continue...")
        }
        console.clear();;
    }
}

const creditMessage = async (data) => {
    if (data) {
        console.clear();;
        console.log("Credit success");
        await readline.question("Press any key to back...")
        return;
    }

    await readline.question("Press any key to continue...")
    return;
}
