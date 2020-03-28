import axios from "axios";

export default {
    getEmployees: count => {
        return axios.get(`https://randomuser.me/api/?results=${count}&inc=name,email`);
    }
}
