import React from "react";
import Form from "./utils/Form";
import Hero from "./utils/Hero";

function Login() {
  return (
    <div className="h-screen bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint flex items-center justify-center">
      <div className="w-3/5 h-4/6 bg-white rounded-l-3xl rounded-t-3xl shadow-2xl flex flex-row">
        <Hero />
        <Form />
      </div>
    </div>
  );
}
export default Login;
