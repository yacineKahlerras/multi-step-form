import React, { useContext } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import StepContext from "@/utils/contexts/stepContext";
import { addOnInfo, plansInfo } from "@/utils/data/data";
import UserData from "@/utils/contexts/UserData";
import FinishingUpElements from "./components/FinishingUpElements";

function FinishingUp() {
  const { addOnIndexes, billingPlan } = useContext(UserData);
  const isYearly = billingPlan.billingPer === "year";

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

  function nextStep() {}

  return (
    <div>
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
            $120/{isYearly ? "yr" : "mo"}
          </span>
        </div>
      </div>

      <FooterNav checkInfo={nextStep} />
    </div>
  );
}

export default FinishingUp;
