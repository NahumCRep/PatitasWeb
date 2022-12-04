import axios from "axios";
import { BASE_URL } from "../config";

const patitasApi = axios.create({
    baseURL: BASE_URL
})

export default patitasApi;