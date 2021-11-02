import React from "react";

function Title({ title }) {
  return (
    <div className="h-20 shadow-md bg-gradient-to-t from-my-accent to-my-accent-mono flex items-center justify-center">
      <span className="font-serif font-semibold text-my-contrast text-2xl">
        {title}
      </span>
    </div>
  );
}
export default Title;
