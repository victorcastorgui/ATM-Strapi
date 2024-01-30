import { URL } from "../utils/constants/constants.js";
export class ATM {
    constructor() { }

    async postRegister(userName, pinNumber, accountNumber) {
        console.log('MASUK REGISTER');
        try {
            const response = await fetch(URL + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        username: userName,
                        pin: pinNumber,
                        account_number: accountNumber
                    }
                })
            });
            if (response.status === 200) {
                return await response.json();
            } else {
                const status = response.status;
                throw new Error(`${status}, Account already exists.`);
            }
        } catch (error) {
            console.error("Oops something is wrong: ", error.message);
            return;
        }
    }

    async postCredit(amount, userId) {
        try {
            const response = await fetch(URL + `/transactions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        amount: amount,
                        userId: userId
                    }
                })
            })
            if (response.status === 200) {
                return await response.json();
            } else {
                const status = response.status
                const res = await response.json();
                throw new Error(`${status},${res.error.message}`)
            }
        } catch (error) {
            console.error("Oops something wrong: ", error.message);
        }
        return;
    }

    async postDebit(amount, userId) {
        try {
            const response = await fetch(URL + `/transactions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        amount: -amount,
                        userId: userId
                    }
                })
            })
            if (response.status === 200) {
                return await response.json();
            } else {
                const status = response.status
                const res = await response.json();
                throw new Error(`${status},${res.error.message}`)
            }
        } catch (error) {
            console.error("Oops something wrong: ", error.message);
            return;
        }
    }

    async getMutation(userId, input) {
        try {
            const response = await fetch(URL + `/mutation/${userId}?sort=${input[1]}&filter=${input[0]}`);
            if (response.status === 200) {
                return await response.json();
            } else {
                const status = response.status
                throw new Error(`${status}, Not Found`)
            }
        } catch (error) {
            console.error("Oops something wrong: ", error.message);
            return;
        }
    }

    async getBalance(userId) {
        try {
            const response = await fetch(URL + `/balance/${userId}`);
            if (response.status === 200) {
                return await response.json();
            } else {
                const status = response.status
                throw new Error(`${status}, Not found`)
            }
        } catch (error) {
            console.error("Oops something wrong: ", error.message);
            return;
        }
    }

    async postLogin(userName, pinNumber) {
        try {
            const response = await fetch(URL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        username: userName,
                        pin: pinNumber
                    }
                })
            });
            if (response.status === 200) {
                return await response.json();
            } else {
                const status = response.status;
                throw new Error(`${status}, Username or Password is incorrect`);
            }
        } catch (error) {
            console.error("Oops something is wrong: ", error.message);
            return;
        }
    }
}