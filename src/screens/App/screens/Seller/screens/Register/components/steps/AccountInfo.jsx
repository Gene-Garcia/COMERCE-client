import React from "react";
import InputField from "../../../../../../../../shared/Components/seller/InputField";
import { AccountInfoCTA } from "../utils/CTA";
import Title from "../utils/Title";

function AccountInfo() {
  return (
    <div className="flex flex-col justify-between gap-10">
      <Title name="Account Information" />

      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-start gap-10">
          <InputField
            type="text"
            name="firstName"
            label="FIRST NAME"
            placeholder="owner's first name"
            className="w-5/12"
          />
          <InputField
            type="text"
            name="lastName"
            label="LAST NAME"
            placeholder="owner's last name"
            className="w-5/12"
          />
        </div>

        <InputField
          type="email"
          name="businessEmail"
          label="BUSINESS EMAIL"
          placeholder="email of the business"
          className="w-3/5"
        />

        <InputField
          type="email"
          name="ownerEmail"
          label="OWNER'S EMAIL"
          placeholder="email of the business owner"
          helper="Email is used to log in to your seller account"
          className="w-3/5"
        />

        <InputField
          type="email"
          name="confirmEmail"
          label="CONFIRM EMAIL"
          placeholder="re-enter the owner's email"
          className="w-3/5"
        />

        <InputField
          type="password"
          name="password"
          label="PASSWORD"
          placeholder="account password"
          className="w-3/5"
        />
      </div>

      <AccountInfoCTA />
    </div>
  );
}

export default AccountInfo;
