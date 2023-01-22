const logisticsRegistrationTypes = {
  AGREE: "AGREE_TO_LOGISTICS_REGISTRATION",
  LOAD_VEHICLE_DATA: "LOAD_LOGISTICS_REGISTRATION_VEHICLE_DATA",
  LOAD_PERSONAL_DATA: "LOAD_LOGISTICS_REGISTRATION_PERSONAL_DATA",
  LOAD_ACCOUNT_DATA: "LOAD_LOGISTICS_REGISTRATION_ACCOUNT_DATA",

  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const agree = (isAgreed) => {
  return {
    type: logisticsRegistrationTypes.AGREE,
    payload: isAgreed,
  };
};

const loadVehicleData = (vehicleData) => {
  return {
    type: logisticsRegistrationTypes.LOAD_VEHICLE_DATA,
    payload: vehicleData,
  };
};

const loadPersonalData = (personalData) => {
  return {
    type: logisticsRegistrationTypes.LOAD_PERSONAL_DATA,
    payload: personalData,
  };
};

const loadAccountData = (accountData) => {
  return {
    type: logisticsRegistrationTypes.LOAD_ACCOUNT_DATA,
    payload: accountData,
  };
};

const resetToDefault = () => {
  return {
    type: logisticsRegistrationTypes.RESET_TO_DEFAULT,
  };
};

export {
  agree,
  loadVehicleData,
  loadPersonalData,
  loadAccountData,
  resetToDefault,
  logisticsRegistrationTypes,
};
