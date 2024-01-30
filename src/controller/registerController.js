import { maxUserNameLength, pinLength } from "../utils/constants/constants.js";
import { luhnAlgorithm } from "../utils/luhnAlgorithm.js";
import { readline } from "../utils/readline.js";


export const registerController = async () => {
    do {
        console.log("Register");
        var userName = await readline.question("Username: ");
        if (userName.length > maxUserNameLength) {
            console.clear();;
            console.log("Error message: Username should no longer than 10 characters ");
            await readline.question("Press any key to continue...");
            console.clear();;
            continue;
        }
    } while (userName.length > 10);
    console.clear();;

    do {
        console.log("Register");
        var accountNumber = await readline.question("Account number: ");
        var luhnCheck = luhnAlgorithm(accountNumber);
        if (!luhnCheck) {
            console.clear();;
            console.log("Error message: Account number is not valid")
            await readline.question("Press any key to continue...")
            console.clear();;
            continue;
        }
    } while (!luhnCheck);
    console.clear();;

    do {
        console.log("Register");
        var pinNumber = await readline.question("Pin: ");
        if (pinNumber.length !== pinLength) {
            console.clear();;
            console.log("Error message: Pin must contain 6 digit numbers ")
            await readline.question("Press any key to continue...")
            console.clear();;
            continue;
        }
    } while (pinNumber.length !== pinLength);
    console.clear();;

    return {
        userName,
        accountNumber,
        pinNumber
    }
}