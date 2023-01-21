import React, { useContext } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import StepContext from "@/utils/contexts/stepContext";
import { addOnInfo, plansInfo } from "@/utils/data/data";
import UserData from "@/utils/contexts/UserData";

function FinishingUp() {
  const { setStep } = useContext(StepContext);
  const { addOnIndexes, billingPlan } = useContext(UserData);
  const isYearly = billingPlan.billingPer === "year";
  const yearlyCoefficent = isYearly ? 10 : 1;

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
  }

  const elements = billInfo.map((bill, index) => {
    return (
      <div
        key={index}
        className="flex justify-between items-center text-CoolGray first:border-b first:border-LightGray first:pb-3"
      >
        <div className="flex flex-col items-start">
          {/* title */}
          <h2
            className={`capitalize 
            ${index == 0 ? "text-MarineBlue font-medium" : ""}`}
          >
            {bill.title}{" "}
            {index == 0 ? (isYearly ? "(yearly)" : "(monthly)") : ""}
          </h2>

          {/* change plan */}
          <button
            className={`capitalize underline ${index == 0 ? "" : "hidden"}`}
          >
            change
          </button>
        </div>

        {/* price */}
        <span className={`${!index ? "text-MarineBlue font-bold" : ""}`}>
          +{bill.price * yearlyCoefficent}/{isYearly ? "yr" : "mo"}
        </span>
      </div>
    );
  });

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
        <div className="flex flex-col gap-4 mb-5 bg-Magnolia p-4 rounded-lg">
          {elements}
        </div>
      </div>

      <FooterNav checkInfo={nextStep} />
    </div>
  );
}

export default FinishingUp;
