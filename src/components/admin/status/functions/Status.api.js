import axios from 'axios';

const BASE_URL = "http://74.208.169.91:90/api";

var methods = {
    async getStatus() {
        try {
            const response = await axios
                .get(`${BASE_URL}/status`);
            return response;
        }
        catch (err) {
            return console.log(err);
        }
    },
    async createStatus(status) {
        try {
            const response = await axios
                .post(`${BASE_URL}/status`, {
                    "description": status
                });
            return response;
        }
        catch (err) {
            return console.log(err);
        }
    },
    async updateStatus(id, description) {
        try {
            const response = await axios
                .put(`${BASE_URL}/status`, {
                    "id": id,
                    "description": description
                });
            return response;
        } catch (err) {
            return console.log(err);
        }
    }

}

export default methods