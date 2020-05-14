import axios from 'axios';

const BASE_URL = "http://74.208.169.91:90/api";

var methods = {
    async createUserAccount(userAccount) {
        try {
            const response = await axios
                .post(`${BASE_URL}/user`, {
                    "email": userAccount.email,
                    "password": userAccount.password,
                    "account_type": 1,
                    "default_role": 1,
                    "status_id": 1
                });
            return response;
        } catch (err) {
            return console.log(err);
        }
    }
}

export default methods;