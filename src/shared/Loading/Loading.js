/*
 * The loading component is a placeholder component that is first rendered, then,
 * will be removed from the DOM when the state variable changes.
 *
 * Instances where the loading state variable will change is when the API call
 * has fetch the data sucessfully.
 *
 */

import React, { useState } from "react";
import "./Loading.css";

function Loading() {
  return (
    <div id="loading">
      <div id="content">
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
export default Loading;
