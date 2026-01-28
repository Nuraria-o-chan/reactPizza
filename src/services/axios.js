import axios from "axios";

const instance = axios.create({
    baseURL: "https://680a96e5d5075a76d9887385.mockapi.io",
})

export default instance;