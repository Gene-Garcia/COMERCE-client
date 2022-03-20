import React from "react";

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-my-accent h-screen p-48">
      <Form />
      <Hero />
    </div>
  );
};
export default Login;

const Form = () => {
  return <div className="w-3/5 h-3/4 bg-white shadow-xl rounded-l-2xl">a</div>;
};

const Hero = () => {
  return (
    <div className="w-2/5 h-full shadow-xl bg-my-accent rounded-2xl">a</div>
  );
};
