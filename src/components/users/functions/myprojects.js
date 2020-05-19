import axios from 'axios';

const BASE_URL = "http://74.208.169.91:90/api";

var methods = {
    async getMyProjects() {
        try {
            const response = await axios
                .get(`${BASE_URL}/project`);
            return response;
        }
        catch (err) {
            return console.log(err);
        }
    }

}

export default methods