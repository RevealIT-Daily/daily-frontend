import axios from 'axios';

const BASE_URL = "http://74.208.169.91:90/api";

var methods = {
    async getTaskByProjectID(project_id) {
        try {
            const response = await axios
                .get(`${BASE_URL}/projectTaskByProject/`+project_id);
            return response;
        }
        catch (err) {
            return console.log(err);
        }
    }
}

export default methods