import React from "react";
import { Link } from "react-router-dom";

function ToLogin() {
  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <p className="text-gray-400 text-sm">already have an account?</p>
      <Link
        to="/login/seller"
        className="px-0.5 text-my-accent font-medium text-md border-b border-transparent transition ease-linear hover:border-my-accent "
      >
        Login
      </Link>
    </div>
  );
}
export default ToLogin;
