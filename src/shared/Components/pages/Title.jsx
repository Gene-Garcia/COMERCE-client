import React from "react";

function Title({ title }) {
  return (
    <div className="h-16 shadow-md bg-gradient-to-t from-my-accent to-my-accent-mono flex items-center justify-center">
      <span className="font-serif font-semibold tracking-wide text-white text-xl">
        {title}
      </span>
    </div>
  );
}
export default Title;
