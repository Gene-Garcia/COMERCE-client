import React from "react";
import { Link } from "react-router-dom";

function PageButtons() {}
export default PageButtons;

function PageButton({ title, type, onClick, to }) {
  const theme =
    "uppercase bg-white rounded-full h-8 px-3 text-sm font-semibold text-gray-500 transition duration-200 ease-linear hover:shadow hover:bg-gray-200 active:bg-white active:ring-2 active:ring-gray-300 active:ring-opacity-60 active:ring-offset-2 active:ring-offset-my-white-tone";

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
export { PageButton };
