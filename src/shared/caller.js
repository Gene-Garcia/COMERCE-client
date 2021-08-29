// caller is basically handles the configuration of axios or any
// other library for api calls

import axios from "axios";

axios.create({
  withCredentials: "true",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH",
  },
});

export default axios;
