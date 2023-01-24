import React, { useContext } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import { addOnInfo, plansInfo } from "@/utils/data/data";
import UserData from "@/utils/contexts/UserData";
import FinishingUpElements from "./components/FinishingUpElements";
import StepContext from "@/utils/contexts/stepContext";
import SectionNav from "../FooterNav/SectionNav";

function FinishingUp() {
  const { setStep } = useContext(StepContext);
  const { addOnIndexes, billingPlan } = useContext(UserData);
  const isYearly = billingPlan.billingPer === "year";
  const yearlyCoefficent = isYearly ? 10 : 1;
  let fullPrice = plansInfo[billingPlan.index].priceMonth;

  const billInfo = [
    {
      title: plansInfo[billingPlan.index].name,
      subtitle: "change",
      price: plansInfo[billingPlan.index].priceMonth,
    },
  ];

  for (const addOnIdx of addOnIndexes) {
    billInfo.push({
      title: addOnInfo[addOnIdx].title,
      price: addOnInfo[addOnIdx].monthlyPrice,
    });
    fullPrice += addOnInfo[addOnIdx].monthlyPrice;
  }

  function nextStep() {
    setStep((oldStep) => oldStep + 1);
  }

  return (
    <div className="sub-card">
      <div className="card-component">
        <h1 className="card-header">Finishing Up</h1>
        <p className="text-CoolGray mb-3">
          Double-check everything looks OK before confirming.
        </p>

        {/* bill elements */}
        <div className="flex flex-col gap-4 mb-5 bg-Magnolia p-4 rounded-lg">
          <FinishingUpElements billInfo={billInfo} isYearly={isYearly} />
        </div>

        {/* tottal price */}
        <div className="flex justify-between px-4 text-CoolGray">
          <span>Total (per {isYearly ? "year" : "month"})</span>
          <span className="text-PurplishBlue font-bold">
            ${fullPrice * yearlyCoefficent}/{isYearly ? "yr" : "mo"}
          </span>
        </div>

        <SectionNav checkInfo={nextStep} />
      </div>

      <FooterNav checkInfo={nextStep} />
    </div>
  );
}

export default FinishingUp;
