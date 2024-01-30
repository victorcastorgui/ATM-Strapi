import { table } from "table";
import { ATM } from "../../class/atm.js";
import { mutationValid } from "../../controller/mutationController.js";
import { negative } from "../../utils/constants/constants.js";
import { ConvertRp } from "../../utils/convertNumber.js";
import { readline } from "../../utils/readline.js";

const atm = new ATM;

export const mutation = async (userId) => {
    let input = await mutationValid();
    let data = await atm.getMutation(userId, input);
    if(data){
        let arr = [];
        const header = ['Date', 'Type', 'Amount']
        arr.push(header)
        for(let item of data.data.transactionList){
            let formatDate = new Date(item.createdAt).toLocaleDateString('en-GB').replaceAll("/", "-");
            if(item.amount < 0){
                item.amount = item.amount * negative;
            }
            arr.push([(formatDate), item.type, ConvertRp(item.amount)])
        }
        console.log(table(arr))
    }
    
    await readline.question("Press any key to continue...");
    console.clear();;
    return;
}