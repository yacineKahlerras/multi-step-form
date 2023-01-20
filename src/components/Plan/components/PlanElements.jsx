import React from "react";

function PlanElements(props) {
  const { plansInfo, billingPlan, selectPlan } = props;

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
            ${plan.priceMonth}/mo
          </span>
        </div>
      </div>
    );
  });
}

export default PlanElements;
