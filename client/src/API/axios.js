import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.tomorrow.io/v4/",
  withCredentials: true,
});

export default instance;
