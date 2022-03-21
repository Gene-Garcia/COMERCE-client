import React from "react";
import { Link } from "react-router-dom";
import { FormButton } from "../../../../../../../../shared/Components/button/ButtonBase";
import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";

const Form = () => {
  return (
    <div className="w-3/5 h-3/4 bg-white shadow-xl rounded-l-2xl p-12">
      <div className="flex flex-col gap-6 justify-between h-full">
        {/* title */}
        <div className="">
          <h1 className="text-3xl text-gray-800 font-semibold font-serif">
            Logistics Login
          </h1>
          <p className=" xs:text-xl text-gray-500 font-medium">Welcome Back!</p>
        </div>

        {/* input fields and button */}
        <div className="space-y-8">
          <EmbossedInput
            type="email"
            name="email"
            value={""}
            onChange={() => {}}
            background="bg-gray-100"
            label="EMAIL"
            error={""}
            width="w-full"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
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
            value={""}
            onChange={() => {}}
            background="bg-gray-100"
            label="PASSWORD"
            error={""}
            width="w-full"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
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

          {/* button and forgot passwords */}
          <div className="flex flex-row justify-between items-center">
            <FormButton
              size="REGULAR"
              text="Login"
              uppercase="uppercase"
              onClick={() => {}}
              isLoading={false}
              textColor="text-white"
              type="BUTTON"
            />

            <Link
              to="/password/forgot"
              className={`text-my-accent font-medium text-sm
          transition duration-150 ease-linear
          hover:text-gray-500`}
            >
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
