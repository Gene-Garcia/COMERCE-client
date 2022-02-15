import React from "react";
import { batch, useDispatch } from "react-redux";
import useSellerRegistration from "../../../../../../../../hooks/useSellerRegistration";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../redux/Alert/AlertAction";
import termsOfAgreement from "../data/termsOfAgreement";
import { TOACTA } from "../utils/CTA";
import Title from "../utils/Title";

function TermsOfAgreement() {
  // redux
  const dispatch = useDispatch();

  // seller context
  const { proceedToNextStep, updateTOA } = useSellerRegistration();

  // submit button
  const agreeTOA = () => {
    updateTOA(true);

    batch(() => {
      dispatch(setSeverity("information"));
      dispatch(setMessage("You have agreed with COMERCE terms of agreement."));
    });

    proceedToNextStep(1);
  };

  return (
    <div className="flex flex-col justify-between gap-4 xs:gap-5 sm:gap-6 md:gap-10">
      <Title name="Terms of Agreement" />

      <div className="h-96 whitespace-pre-line overflow-y-scroll">
        <p className="text-base text-black">{termsOfAgreement}</p>
      </div>

      <TOACTA onClick={agreeTOA} />
    </div>
  );
}

export default TermsOfAgreement;
