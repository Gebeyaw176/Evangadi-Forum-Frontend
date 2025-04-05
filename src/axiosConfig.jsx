import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:6063/api",

  baseURL: "https://evangadi-forum-backend-k2rq.onrender.com/api",
});
export default axiosBase;