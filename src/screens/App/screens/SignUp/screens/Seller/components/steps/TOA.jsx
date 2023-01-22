import React from "react";
import { batch, useDispatch } from "react-redux";
import { setMessages } from "../../../../../../../../redux/Alert/AlertAction";
import { agreeToTOA } from "../../../../../../../../redux/Seller/SellerRegistration/SellerRegistrationAction";
import { proceedToNextStep } from "../../../../../../../../redux/Steps/StepsAction";

import termsOfAgreement from "../data/termsOfAgreement";
import { TOACTA } from "../utils/CTA";

function TermsOfAgreement() {
  // redux
  const dispatch = useDispatch();

  // submit button
  const agreeTOA = () =>
    batch(() => {
      dispatch(agreeToTOA(true));

      dispatch(
        setMessages([
          {
            message: "You have agreed with COMERCE terms of agreement.",
            severity: "information",
          },
        ])
      );

      dispatch(proceedToNextStep(2));
    });

  return (
    <div
      className="flex flex-col justify-between 
      gap-6 md:gap-7 xl:gap-8"
    >
      <div className="h-96 whitespace-pre-line overflow-y-scroll bg-slate-50 p-2 rounded-md border border-neutral-200">
        <p className="text-base text-black">{termsOfAgreement}</p>
      </div>

      <TOACTA onClick={agreeTOA} />
    </div>
  );
}

export default TermsOfAgreement;
