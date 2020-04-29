import axios from 'axios';

const BASE_URL = "http://74.208.169.91:90/api";

var methods = {
    async getAccountType() {
        try {
            const response = await axios
                .get(`${BASE_URL}/accountType`);
            return response;
        }
        catch (err) {
            return console.log(err);
        }
    },
    async createAccountType(accountType) {
        try {
            const response = await axios
                .post(`${BASE_URL}/accountType`, {
                    "name": accountType.name,
                    "description": accountType.description,
                    "status_id":accountType.status_id
                });
            return response;
        }
        catch (err) {
            return console.log(err);
        }
    },
    async updateAccountType(id, item) {
        try {
            const response = await axios
                .put(`${BASE_URL}/accountType`, {
                    "id": id,
                    "name":item.name,
                    "description": item.description
                });
            return response;
        } catch (err) {
            return console.log(err);
        }
    }

}

export default methods