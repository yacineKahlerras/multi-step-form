import React from "react";
import { useContext } from "react";
import UserData from "@/utils/contexts/UserData";

function AddOnElements(props) {
  const { billingPlan } = useContext(UserData);
  const { addOnInfo, selectAddOn } = props;
  const isYearly = billingPlan.billingPer === "year";
  const priceCoefficent = isYearly ? 10 : 1;

  return addOnInfo.map((addon, index) => {
    const activePlanStyle =
      billingPlan.name !== addon.name ? "" : "border-PurplishBlue bg-Magnolia";

    return (
      <div
        key={index}
        className={`billing-plan ${activePlanStyle} py-3`}
        onClick={() => selectAddOn(index)}
      >
        <div className="flex gap-2 items-center">
          <div className="shrink-0 w-5 h-5 border border-spacing-1 border-CoolGray rounded-[.27rem]"></div>
          <div>
            <h2 className="font-bold leading-5 capitalize">{addon.title}</h2>
            <span className="text-CoolGray font-medium text-xs">
              {addon.subtitle}
            </span>
          </div>
          <span className="text-sm shrink-0">
            +{addon.monthlyPrice * priceCoefficent}/{isYearly ? "yr" : "mo"}
          </span>
        </div>
      </div>
    );
  });
}

export default AddOnElements;
