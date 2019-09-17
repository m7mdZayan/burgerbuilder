import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgershop-59a89.firebaseio.com/"
});

export default instance;
