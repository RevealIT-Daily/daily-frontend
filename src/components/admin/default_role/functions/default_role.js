import axios from 'axios';

const BASE_URL = "http://74.208.169.91:90/api";

var methods = {
    async getDefaultRole() {
        try {
            const response = await axios
                .get(`${BASE_URL}/defaultRole`);
            return response;
        }
        catch (err) {
            return console.log(err);
        }
    },
    async createDefaultRole( defaultRole) {
        try {
            const response = await axios
                .post(`${BASE_URL}/defaultRole`, {
                   
                    "description":  defaultRole.description,
                    "status_id": defaultRole.status_id
                });
            return response;
        }
        catch (err) {
            return console.log(err);
        }
    },
    async updateDefaultRole(id, description) {
        try {
            const response = await axios
                .put(`${BASE_URL}/defaultRole`, {
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