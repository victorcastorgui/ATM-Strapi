import { ATM } from "../../class/atm.js";
import { loginController } from "../../controller/loginController.js";
import { readline } from "../../utils/readline.js";
import { mainMenu } from "../mainMenu/mainMenu.js";

const atm = new ATM;

export const login = async () => {
    let result = await loginController();

    let userName = result.userName;
    let pinNumber = result.pinNumber;


    const data = await atm.postLogin(userName, pinNumber);
    if(data){
        mainMenu(data.id)
    }

    await readline.question("Press any key to continue...");
    return;
}