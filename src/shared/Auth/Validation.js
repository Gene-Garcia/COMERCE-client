import axios from "../caller";
import { clearUserPersistData } from "./Login";

// Validates if the user is logged in and has access to this site
// Logic of validation highly depends on the backend
async function validateUser(cb) {
  let status = "";

  await axios
    .get("/api/user/validate")
    .then((res) => {
      if (res.status === 200) status = "SUCCESS";
      else status = "FAILED";
    })
    .catch((err) => {
      clearUserPersistData();
      if (err.response === undefined) status = "FAILED";
      else if (err.response.status === 401) status = "UNAUTHORIZED";
      else if (err.response.status === 403) status = "FORBIDDEN";
      else status = "FAILED";
    });

  cb(status);
}

export default validateUser;

// template
// validateUser((status) => {
//     if (status === "SUCCESS") setLoading(false);
//     else if (status === "FAILED") history.push("/login");
//     else if (status === "UNAUTHORIZED") history.push("/unauthorized");
//     else if (status === "FORBIDDEN") history.push("/forbidden");
//   });
