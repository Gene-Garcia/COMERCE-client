import React from "react";
import { batch, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../../../../../../../hooks/useForm";
import { FormButton } from "../../../../../../../../shared/Components/button/ButtonBase";
import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";
import axios from "../../../../../../../../shared/caller";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../redux/Alert/AlertAction";

const Form = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  const SubmitLoginAPI = async () => {
    await axios
      .post("/api/signin", {
        expectedUserType: "LOGISTICS",
        ...values,
      })
      .then((res) => {
        if (res.status === 200) {
          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(
              setMessage("Log in successful. Welcome back to COMERCE express.")
            );
          });

          history.push("/logistics/track/track-search");
        }
      })
      .catch((err) => {
        console.error(err);

        setIsLoading(false);

        if (!err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(
              setMessage(
                "Something went wrong. Refresh the page or try again later. If errors persist please contact our support."
              )
            );
          });
        else if (err.response.status === 403) history.push("/forbidden");
        else if (err.response.status === 401) history.push("/unauthorized");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  };

  //#region form configuration
  const validate = (data, setErrors) => {
    let temp = { ...errors };

    if ("email" in data) temp.email = data.email ? "" : "Email is required";

    if ("password" in data)
      temp.password = data.password ? "" : "Password is required";

    setErrors(temp);
  };

  const init = {
    email: "",
    password: "",
  };
  const {
    values,
    errors,
    isLoading,
    setIsLoading,
    handleInput,
    handleFormSubmit,
  } = useForm(init, init, validate, SubmitLoginAPI);
  //#endregion

  return (
    <div className="flex flex-col gap-6 justify-between h-full">
      {/* title */}
      <div className="">
        <h1
          className="text-xl md:text-2xl lg:text-3xl 
        text-gray-800 font-semibold font-serif"
        >
          Logistics Login
        </h1>
        <p className="text-md md:text-xl text-gray-500 font-medium">
          Welcome Back!
        </p>
      </div>

      {/* input fields and button */}
      <div className="space-y-6 lg:space-y-8">
        <EmbossedInput
          type="email"
          name="email"
          value={values.email}
          onChange={handleInput}
          background="bg-gray-100"
          label="EMAIL"
          error={errors.email}
          width="w-full"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-accent mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          }
        />

        <EmbossedInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleInput}
          background="bg-gray-100"
          label="PASSWORD"
          error={errors.password}
          width="w-full"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-accent mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          }
        />

        <div className="flex flex-row justify-between gap-4 items-center">
          <div className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              className="rouned-xl border"
            />
            <label
              for="rememberMe"
              className="text-sm font-medium text-gray-600"
            >
              Remember Me
            </label>
          </div>

          <Link
            to="/password/forgot"
            className="text-accent text-sm font-medium transition ease-linear hover:text-gray-600"
          >
            Forgot Password
          </Link>
        </div>

        <div className="w-max ml-auto xl:ml-0">
          <FormButton
            size="REGULAR"
            text="Login"
            uppercase="uppercase"
            onClick={handleFormSubmit}
            isLoading={isLoading}
            textColor="text-white"
            type="BUTTON"
          />
        </div>

        <Link
          to="/sign-up/logistics"
          className="block w-full text-center
                    text-zinc-400 text-sm 
                    transition duration-150 ease-linear 
                    hover:text-neutral-500"
        >
          don't have an account?
        </Link>
      </div>
    </div>
  );
};

export default Form;
