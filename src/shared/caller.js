// caller is basically handles the configuration of axios or any
// other library for api calls

import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:5000",
});
