import React from "react";
import { useContext } from "react";
import UserData from "@/utils/contexts/UserData";
import checkedIcon from "@/assets/images/icon-checkmark.svg";

function AddOnElements(props) {
  const { billingPlan, addOnIndexes, setAddOnIndexes } = useContext(UserData);
  const { addOnInfo, selectAddOn } = props;
  const isYearly = billingPlan.billingPer === "year";
  const priceCoefficent = isYearly ? 10 : 1;

  return addOnInfo.map((addon, index) => {
    const isChecked = addOnIndexes.has(index);
    const activeElemStyle = isChecked ? "border-PurplishBlue bg-Magnolia" : "";
    const activeCheckbox = isChecked ? "bg-PurplishBlue" : "";

    return (
      <div
        key={index}
        className={`billing-plan ${activeElemStyle} py-3`}
        onClick={() => selectAddOn(index)}
      >
        <div className="w-full flex gap-2 items-center">
          <div
            className={`grid place-items-center shrink-0 w-5 h-5 border border-spacing-1 border-CoolGray rounded-[.27rem] ${activeCheckbox}`}
          >
            <img src={checkedIcon} alt={addon.title} className={``} />
          </div>
          <div>
            <h2 className="font-bold leading-5 capitalize">{addon.title}</h2>
            <span className="text-CoolGray font-medium text-xs">
              {addon.subtitle}
            </span>
          </div>
          <span className="text-sm shrink-0 ml-auto">
            +{addon.monthlyPrice * priceCoefficent}/{isYearly ? "yr" : "mo"}
          </span>
        </div>
      </div>
    );
  });
}

export default AddOnElements;
