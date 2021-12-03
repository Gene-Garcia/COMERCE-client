import React from "react";
import Form from "./utils/Form";
import Hero from "./utils/Hero";

function Login() {
  return (
    <div className="h-screen bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint flex items-center justify-center py-14 xs:py-0 px-2.5 xs:px-3 sm:px-0">
      <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-3/4 2xl:w-3/5 h-full xs:h-4/5 lg:h-3/4 bg-white rounded-l-md xs:rounded-l-xl md:rounded-l-3xl rounded-t-md xs:rounded-t-xl md:rounded-t-3xl shadow-2xl flex flex-row">
        <Hero />
        <Form />
      </div>
    </div>
  );
}
export default Login;
