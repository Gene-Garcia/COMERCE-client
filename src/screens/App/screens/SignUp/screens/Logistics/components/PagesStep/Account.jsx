import React from "react";
import { useHistory } from "react-router-dom";

import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setMessages,
  setSeverity,
} from "../../../../../../../../redux/Alert/AlertAction";
import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";

import axios from "../../../../../../../../shared/axios";

import { useForm } from "../../../../../../../../hooks/useForm";

import { AccountCTA } from "./CallToAction";

const Account = () => {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // redux logistics registrations reducer & state
  const personalData = useSelector(
    (state) => state.LOGISTICS_REGISTRATION.personalData
  );
  const vehicleData = useSelector(
    (state) => state.LOGISTICS_REGISTRATION.vehicleData
  );

  // API
  const SubmitLogisticsRegistration = async () => {
    // build data
    const data = {
      ...values,
      firstName: personalData.firstName,
      lastName: personalData.lastName,

      userType: "LOGISTICS",

      vehicleData,

      address: {
        streetAddress: personalData.streetAddress,
        barangay: personalData.barangay,
        cityMunicipality: personalData.cityMunicipality,
        province: personalData.province,
      },

      contactInformation: {
        primaryNumber: personalData.primaryNumber,
        secondaryNumber: personalData.secondaryNumber,
      },
    };

    await axios
      .post("/api/signup", { ...data })
      .then((res) => {
        if (res.status === 201) {
          setIsLoading(false);

          dispatch(
            setMessages([
              {
                message: "Logistics account created.",
                severity: "success",
              },
            ])
          );

          history.push("/login/logistics");
        }
      })
      .catch((err) => {
        setIsLoading(false);

        if (!err.response)
          dispatch(
            setMessages([
              {
                message: "Invalid registration. Try again.",
                severity: "error",
              },
            ])
          );
        else if (err.response.status === 403) history.push("/forbidden");
        else if (err.response.status === 401) history.push("unauthorized");
        else
          dispatch(
            setMessages([
              {
                message: err.response.data.error,
                severity: "error",
              },
            ])
          );
      });
    // dispatch(loadAccountData(values));
  };

  //#region form configurations
  const validate = (data, setErrors) => {
    const temp = { ...errors };

    if ("username" in data) temp.username = data.username ? "" : "Required";
    if ("email" in data) temp.email = data.email ? "" : "Required";
    if ("password" in data) temp.password = data.password ? "" : "Required";

    setErrors(temp);
  };

  const initial = {
    username: "",
    email: "",
    password: "",
  };
  const {
    values,
    errors,
    handleInput,
    handleFormSubmit,
    setIsLoading,
    isLoading,
  } = useForm(initial, initial, validate, SubmitLogisticsRegistration);
  //#endregion

  return (
    <>
      {/* form */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <EmbossedInput
            type="text"
            name="username"
            value={values.username}
            onChange={handleInput}
            placeholder="How would you like to be addressed"
            background="bg-gray-100"
            label="Username"
            error={errors.username}
            width="w-full"
          />

          <EmbossedInput
            type="email"
            name="email"
            value={values.email}
            onChange={handleInput}
            placeholder="Enter your unique email"
            background="bg-gray-100"
            label="Email"
            error={errors.email}
            width="w-full"
          />
        </div>

        <EmbossedInput
          type="password"
          name="password"
          value={values.password}
          onChange={handleInput}
          placeholder="Strong password for your account"
          background="bg-gray-100"
          label="Account Password"
          error={errors.password}
          width="w-full"
        />
      </div>

      <AccountCTA onClick={handleFormSubmit} isLoading={isLoading} />
    </>
  );
};
export default Account;
