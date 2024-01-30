import { readline } from "../utils/readline.js";
export const mutationValid = async () => {
    do {
        let input = await readline.question("Input : ");
        var temp = input.split(" ");
        if (temp[1] !== "asc" && temp[1] !== "desc") {
            console.log("Error message: Order must be 'asc' (ascending) or 'desc' (descending)");
            await readline.question("Press any key to continue...");
            console.clear();;
        }
        if (temp[0] !== "CREDIT" && temp[0] !== "DEBIT" && temp[0] !== "ALL") {
            console.log("Error message: Type must be 'CREDIT', 'DEBIT', or 'ALL'");
            await readline.question("Press any key to continue...");
            console.clear();;
        }
    } while (temp[1] !== "asc" && temp[2] !== "desc" || temp[0] !== "CREDIT" && temp[0] !== "DEBIT" && temp[0] !== "ALL");
    return temp;
}