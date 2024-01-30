import { ConvertRp } from "./convertNumber.js";
import { fiftyThousand, oneHundredThousand } from "./constants/constants.js";

export function nominalMenu(){
    console.log("Choose nominal:");
    console.log(`1. ${ConvertRp(fiftyThousand)}`);
    console.log(`2. ${ConvertRp(oneHundredThousand)}`);
}