import axios from "axios";

export default {
    getEmployees: () => {
        return axios.get("https://randomuser.me/api/?results=20&inc=name");
    }
}
