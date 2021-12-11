import React from "react";

function Title({ title }) {
  return (
    <div className="h-16 shadow-md bg-gradient-to-b from-my-accent to-my-accent-tone flex items-center justify-center">
      <span className="font-serif font-semibold tracking-wide text-white text-xl">
        {title}
      </span>
    </div>
  );
}
export default Title;

function SellerTitle({ title }) {
  return <h3>{title}</h3>;
}
export { SellerTitle };
