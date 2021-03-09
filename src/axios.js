import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsappagain-mern.herokuapp.com/",
});

export default instance;
