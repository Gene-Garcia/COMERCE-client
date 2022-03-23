const logisticsRegistrationTypes = {
  NEXT_STEP: "NEXT_LOGISTICS_REGISTRATION_STEP",
  TOGGLE_STEP: "TOGGLE_LOGISTICS_REGISTRATION_STEP",
  AGREE: "AGREE_TO_LOGISTICS_REGISTRATION",
  LOAD_VEHICLE_DATA: "LOAD_LOGISTICS_REGISTRATION_VEHICLE_DATA",
  LOAD_PERSONAL_DATA: "LOAD_LOGISTICS_REGISTRATION_PERSONAL_DATA",
  LOAD_ACCOUNT_DATA: "LOAD_LOGISTICS_REGISTRATION_ACCOUNT_DATA",

  RESET_TO_DEFAULT: "RESET_TO_DEFAULT",
};

const nextStep = () => {
  return {
    type: logisticsRegistrationTypes.NEXT_STEP,
  };
};

const toggleStep = (stepNumber) => {
  return {
    type: logisticsRegistrationTypes.TOGGLE_STEP,
    payload: stepNumber,
  };
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
  nextStep,
  toggleStep,
  agree,
  loadVehicleData,
  loadPersonalData,
  loadAccountData,
  resetToDefault,
  logisticsRegistrationTypes,
};
