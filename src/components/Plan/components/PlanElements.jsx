import React from "react";
import { useContext } from "react";
import { plansInfo } from "@/utils/data/data";
import UserData from "@/utils/contexts/UserData";

function PlanElements() {
  const { billingPlan, setBillingPlan } = useContext(UserData);
  const isYearly = billingPlan.billingPer === "year";
  const priceCoefficent = isYearly ? 10 : 1;
  const timeUnit = isYearly ? "yr" : "mo";

  function selectPlan(planIndex) {
    setBillingPlan((oldValue) => ({
      ...oldValue,
      index: planIndex,
    }));
  }

  const freeMonthsElement = (
    <span
      className={`font-medium text-MarineBlue text-xs ${
        isYearly ? "" : "hidden md:block md:opacity-0"
      }`}
    >
      2 months free
    </span>
  );

  return plansInfo.map((plan, index) => {
    const activePlanStyle =
      billingPlan.index !== index ? "" : "border-PurplishBlue bg-Magnolia";

    return (
      <div
        key={index}
        className={`billing-plan ${activePlanStyle} md:flex-col md:min-w-[7.5rem] items-start`}
        onClick={() => selectPlan(index)}
      >
        <img
          className="max-w-[2.5rem] md:max-w-[2rem] md:mb-6 md:mt-3"
          src={plan.icon}
          alt={plan.name}
        />
        <div className="flex flex-col">
          <h2 className="font-bold leading-none capitalize">{plan.name}</h2>
          <span className="text-CoolGray font-medium md:text-sm">
            ${plan.priceMonth * priceCoefficent}/{timeUnit}
          </span>
          {freeMonthsElement}
        </div>
      </div>
    );
  });
}

export default PlanElements;
