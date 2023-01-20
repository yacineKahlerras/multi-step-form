import React from "react";

function PlanElements(props) {
  const { plansInfo, billingPlan, selectPlan } = props;
  const isYearly = billingPlan.billingPer === "year";
  const priceCoefficent = isYearly ? 10 : 1;

  const freeMonthsElement = isYearly ? (
    <span className=" font-medium text-MarineBlue text-xs">2 months free</span>
  ) : (
    ""
  );

  return plansInfo.map((plan, index) => {
    const activePlanStyle =
      billingPlan.name !== plan.name ? "" : "border-PurplishBlue bg-Magnolia";

    return (
      <div
        key={index}
        className={`billing-plan ${activePlanStyle}`}
        onClick={() => selectPlan(index)}
      >
        <img className="max-w-[2.5rem]" src={plan.icon} alt={plan.name} />
        <div className="flex flex-col">
          <h2 className="font-bold leading-none capitalize">{plan.name}</h2>
          <span className="text-CoolGray font-medium">
            ${plan.priceMonth * priceCoefficent}/mo
          </span>
          {freeMonthsElement}
        </div>
      </div>
    );
  });
}

export default PlanElements;
