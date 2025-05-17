import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // You can set default headers here if needed
  // headers: { Authorization: "Bearer YOUR_ACCESS_TOKEN" }
});

export default instance;
