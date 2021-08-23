import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";
import { useForm } from "../../../../../shared/Form/useForm";
import InputField from "../../../../../shared/Auth/InputField.Auth";
import Alert from "../../../../../shared/Auth/Alert";
import { setUserPersistData } from "../../../../../shared/Auth/Login";

function Login({ history }) {
  // state variable for API message
  const [reqErr, setReqErr] = useState("");

  async function LoginApi() {
    await axios
      .post("/api/signin", values)
      .then((res) => {
        if (res.status === 200) {
          setUserPersistData(res.data.user.email, res.data.user.username);
          history.push("/user");
        }
      })
      .catch((err) => {
        if (err.response) setReqErr(err.response.data.error);
        else setReqErr("Something went wrong. Try again.");
      });
  }

  function validate(formData, setErrors) {
    let tempErrs = { ...errors };

    if ("email" in formData)
      tempErrs.email =
        formData.email === "" || formData.email === null
          ? "Email is required"
          : "";

    if ("password" in formData)
      tempErrs.password =
        formData.password === "" || formData.password === null
          ? "Password is required"
          : "";

    setErrors(tempErrs);
  }

  const initialState = { email: "", password: "" };
  const { values, errors, handleInput, handleFormSubmit, resetForms } = useForm(
    initialState,
    initialState,
    validate,
    LoginApi
  );

  return (
    <div className="flex h-full">
      {/* hero */}
      <div className="w-2/5 h-full bg-gradient-to-t from-my-accent to-my-accent-mono"></div>

      {/* form */}
      <div className="h-full bg-white flex-grow flex flex-col justify-evenly items-center px-44">
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="font-bold text-3xl font-sans ">
            Login to your account
          </h1>
          <p className="font-medium text-xl text-gray-400">CoMerce Account</p>
        </div>

        <div className="flex flex-row gap-x-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-my-accent to-my-accent-mono flex justify-center items-center">
            <span className="text-my-contrast text-semibold text-xl">
              Google
            </span>
          </div>

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-my-accent to-my-accent-mono flex justify-center items-center">
            <span className="text-my-contrast text-semibold text-xl">FB</span>
          </div>

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-my-accent to-my-accent-mono flex justify-center items-center">
            <span className="text-my-contrast text-semibold text-xl">
              Twitter
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-y-8">
          <Alert reqErr={reqErr} setReqErr={setReqErr} />

          <InputField
            name="email"
            type="text"
            label="EMAIL"
            error={errors.email}
            value={values.email}
            onChange={handleInput}
            svgD="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />

          <InputField
            name="password"
            type="password"
            label="PASSWORD"
            error={errors.password}
            value={values.password}
            onChange={handleInput}
            svgD="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />

          <button
            onClick={handleFormSubmit}
            className="transition border border-my-accent rounded-md text-my-accenet font-semibold text-xl text-my-accent h-10 hover:bg-my-accent hover:text-my-contrast active:ring active:ring-my-accent-mono active:ring-offset-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
