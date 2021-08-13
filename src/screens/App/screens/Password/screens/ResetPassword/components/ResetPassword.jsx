import React from "react";

import useQuery from "../../../../../../../shared/Route/useQuery";

function ResetPassword() {
  const query = useQuery();
  console.log(query.get("t"));

  return <h1>ResetPassword</h1>;
}

export default ResetPassword;
