/*
 * The loading component is a placeholder component that is first rendered, then,
 * will be removed from the DOM when the state variable changes.
 *
 * Instances where the loading state variable will change is when the API call
 * has fetch the data sucessfully.
 *
 */

import React from "react";
import target from "../animations/target-loading.gif";

function Loading() {
  return <img src={target} className="m-auto w-24 h-24" />;
}
export default Loading;
