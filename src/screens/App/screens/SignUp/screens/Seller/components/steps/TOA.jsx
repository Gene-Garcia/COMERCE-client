import React from "react";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../redux/Alert/AlertAction";
import {
  agreeToTOA,
  proceedToNextStep,
} from "../../../../../../../../redux/Seller/SellerRegistration/SellerRegistrationAction";
import termsOfAgreement from "../data/termsOfAgreement";
import { TOACTA } from "../utils/CTA";

function TermsOfAgreement() {
  // redux
  const dispatch = useDispatch();

  // submit button
  const agreeTOA = () =>
    batch(() => {
      dispatch(agreeToTOA(true));

      dispatch(setSeverity("information"));
      dispatch(setMessage("You have agreed with COMERCE terms of agreement."));

      dispatch(proceedToNextStep(1));
    });

  return (
    <div
      className="flex flex-col justify-between 
      gap-4 xs:gap-5 sm:gap-6 md:gap-10"
    >
      <div className="h-96 whitespace-pre-line overflow-y-scroll">
        <p className="text-base text-black">{termsOfAgreement}</p>
      </div>

      <TOACTA onClick={agreeTOA} />
    </div>
  );
}

export default TermsOfAgreement;
