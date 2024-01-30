import { ATM } from "../../class/atm.js";
import { ConvertRp } from "../../utils/convertNumber.js";
import { readline } from "../../utils/readline.js";

const atm  = new ATM;

export const balance = async (userId) => {

    console.clear();;

    const data = await atm.getBalance(userId)
    if (data) {
        console.log("Check balance");
        console.log(`Your balance is ${ConvertRp(data.data.balance)}`);
        await readline.question("Press any key to back...")
        return;
    }


    await readline.question("Press any key to continue...")
    return;
}