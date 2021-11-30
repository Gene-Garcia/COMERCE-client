import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../../../../../../../hooks/useForm";
import InputField from "../../../../../../../../shared/Auth/InputField";
import Button from "../../../../../../../../shared/Components/button/Button";
import axios from "../../../../../../../../shared/caller";
import useAlert from "../../../../../../../../hooks/useAlert";
import { setUserPersistData } from "../../../../../../../../shared/Auth/Login";

function Form() {
  //history
  let history = useHistory();

  // alert context and hook
  const { setMessage, setSeverity } = useAlert();

  // Form hooks
  const LoginAPI = async () => {
    await axios
      .post("/api/signin", { ...values, expectedUserType: "SELLER" })
      .then((res) => {
        if (res.status === 200) {
          setUserPersistData(res.data.user.email, res.data.user.username);
          setSeverity("success");
          setMessage("Succesfully logged in. Welcome back!");
          history.push("/seller");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setSeverity("error");
        if (!err.response)
          setMessage("Something went wrong. Please try again later.");
        else {
          setMessage(err.response.data.error);
          // if (err.response.status === 401) history.push("/unathorized");
          // else if (err.response.status === 403) history.push("/forbidden");
        }
      });
  };

  const validation = (data, setErrors) => {
    let temp = { ...errors };

    if ("email" in data) temp.email = data.email ? "" : "Email is required";

    if ("password" in data)
      temp.password = data.password ? "" : "Password is required";

    setErrors(temp);
  };

  const init = { email: "", password: "" };
  const {
    values,
    errors,
    handleInput,
    handleFormSubmit,
    isLoading,
    setIsLoading,
  } = useForm(init, init, validation, LoginAPI);

  return (
    <div className="w-1/2 h-full p-10 flex flex-col justify-center gap-16">
      <div className="">
        <h1 className="text-3xl text-black font-medium">Seller Login</h1>
        <p className="text-xl text-gray-600 font-medium">Welcome Back!</p>
      </div>

      <div className="space-y-9">
        <InputField
          type="email"
          name="email"
          label="OWNERS EMAIL"
          error={errors.email}
          value={values.email}
          onChange={handleInput}
          svgD="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />

        <div className="space-y-2">
          <InputField
            type="password"
            name="password"
            label="PASSWORD"
            error={errors.password}
            value={values.password}
            onChange={handleInput}
            svgD="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />

          <div className="text-right">
            <Link
              to="/password/forgot"
              className="text-my-accent text-sm font-medium transition ease-linear hover:text-gray-600"
            >
              Forgot Password
            </Link>
          </div>
        </div>

        <Button
          isLoading={isLoading}
          buttonClass="bg-my-accent rounded w-full py-1.5 shadow-md transition duration-200 ease-linear hover:bg-my-accent-mono"
          svgClass="text-white"
          onClick={handleFormSubmit}
        >
          <span className="text-white font-medium text-lg">LOGIN</span>
        </Button>

        <div className="flex flex-row items-center justify-center gap-2">
          <p className="text-gray-400 mb-0">don't have an account?</p>
          <Link
            to="/sign-up/seller"
            className="px-0.5 text-my-accent font-medium text-lg border-b border-transparent transition ease-linear hover:border-my-accent "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Form;
