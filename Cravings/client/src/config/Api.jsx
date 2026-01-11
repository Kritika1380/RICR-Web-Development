import axios from "axios";

const axoisInstance = axios.create({
    baseURL:"http://localhost:4500"
})

export default axoisInstance
