import React from "react";
import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { AccountCTA } from "./CallToAction";

const Account = () => {
  return (
    <>
      {/* form */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between gap-5">
          <EmbossedInput
            type="text"
            name="username"
            value=""
            onChange={() => {}}
            placeholder="How would you like to be addressed"
            background="bg-gray-100"
            label="Username"
            error=""
            width="w-full"
          />

          <EmbossedInput
            type="email"
            name="email"
            value=""
            onChange={() => {}}
            placeholder="Enter your unique email"
            background="bg-gray-100"
            label="Email"
            error=""
            width="w-full"
          />
        </div>

        <EmbossedInput
          type="password"
          name="password"
          value=""
          onChange={() => {}}
          placeholder="Strong password for your account"
          background="bg-gray-100"
          label="Account Password"
          error=""
          width="w-full"
        />
      </div>

      <AccountCTA onClick={() => {}} />
    </>
  );
};
export default Account;
