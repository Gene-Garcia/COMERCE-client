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
  return (
    <div className="w-full h-full">
      <img src={target} className="w-1/6 m-auto" />
    </div>
  );
}
export default Loading;
