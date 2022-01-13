import React from "react";
import { Link } from "react-router-dom";

function HeaderButton({ title, type, onClick, to }) {
  const theme =
    "uppercase bg-my-white-tint rounded-full h-8 px-5 text-xs font-medium text-black shadow transition duration-200 ease-linear hover:bg-gray-200 active:ring-2 active:ring-gray-300 active:ring-offset-2 active:ring-offset-my-white-tone";

  return type.toUpperCase() === "BUTTON" ? (
    <button onClick={onClick} className={theme}>
      {title}
    </button>
  ) : (
    <Link to={to} className={theme}>
      {title}
    </Link>
  );
}
export default HeaderButton;
