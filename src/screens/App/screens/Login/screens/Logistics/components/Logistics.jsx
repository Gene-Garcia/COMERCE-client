import React from "react";
import Form from "./utils/Form";
import Hero from "./utils/Hero";

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen p-48 bg-gradient-to-bl from-my-accent via-my-accent-tone to-my-accent-tint">
      <Form />
      <Hero />
    </div>
  );
};
export default Login;
