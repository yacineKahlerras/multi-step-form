import React, { useContext, useEffect, useState } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import StepContext from "@/utils/contexts/stepContext";
import { addOnInfo, plansInfo } from "@/utils/data/data";
import UserData from "@/utils/contexts/UserData";

function FinishingUp() {
  const { setStep } = useContext(StepContext);
  const { addOnIndexes, billingPlan } = useContext(UserData);
  const isYearly = billingPlan.billingPer === "year";

  const billInfo = [
    {
      title: plansInfo[billingPlan.index].name,
      price: plansInfo[billingPlan.index].priceMonth,
    },
  ];

  for (const addOnIdx of addOnIndexes) {
    billInfo.push();
  }

  function nextStep() {
    setStep((oldStep) => oldStep + 1);
  }

  return (
    <div>
      <div className="card-component">
        <h1 className="card-header">Finishing Up</h1>
        <p className="text-CoolGray mb-3">
          Double-check everything looks OK before confirming.
        </p>
        <div className="flex flex-col gap-4 mb-5"></div>
      </div>

      <FooterNav checkInfo={nextStep} />
    </div>
  );
}

export default FinishingUp;
