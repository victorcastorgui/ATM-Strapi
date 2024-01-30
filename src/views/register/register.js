import { ATM } from "../../class/atm.js";
import { registerController } from "../../controller/registerController.js";
import { readline } from "../../utils/readline.js";

const atm = new ATM;

export const register = async () => {
    let result = await registerController();

    let userName = result.userName;
    let accountNumber = result.accountNumber;
    let pinNumber = result.pinNumber;

    let data = await atm.postRegister(userName, pinNumber, accountNumber)

    if(data){
        return;
    }

    await readline.question("Press any key to continue...");
    return;
}