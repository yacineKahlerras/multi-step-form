import React, { useRef, useState } from "react";
import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";

function Plan(props) {
  const [billingPlan, setBillingPlan] = useState({
    name: "arcade",
    billingPer: "month",
  });

  const plansInfo = [
    { name: "arcade", priceMonth: 9, icon: arcadeIcon },
    { name: "advanced", priceMonth: 12, icon: advancedIcon },
    { name: "pro", priceMonth: 15, icon: proIcon },
  ];

  const plansElements = plansInfo.map((plan, index) => {
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

  function BillingPeriod() {
    const toggleSwitch = useRef();
    const activeMonthStyle =
      billingPlan.billingPer == "month" ? "" : "text-CoolGray";
    const activeYearStyle =
      billingPlan.billingPer == "year" ? "" : "text-CoolGray";

    function toggleChange(e) {
      setBillingPlan((oldValue) => ({
        ...oldValue,
        billingPer: oldValue.billingPer === "month" ? "year" : "month",
      }));
    }

    return (
      <div className="bg-Magnolia flex justify-center items-center gap-3 py-4 rounded-lg">
        <span
          className={`capitalize font-bold ${activeMonthStyle} duration-700`}
        >
          monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            // onChange={toggleChange}
            // checked={billingPlan.billingPer !== "month"}
            type="checkbox"
            className="sr-only peer"
          />
          <div className="billing-toggle-switch"></div>
        </label>
        <span
          className={`capitalize font-bold ${activeYearStyle} transition-all duration-700`}
        >
          yearly
        </span>
      </div>
    );
  }

  function selectPlan(planIndex) {
    setBillingPlan((oldValue) => ({
      ...oldValue,
      name: plansInfo[planIndex].name,
    }));
  }

  function checkInfo() {}

  return (
    <div>
      <div className="card-component">
        <h1 className="card-header">Select your plan</h1>
        <p className="text-CoolGray mb-3">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col gap-4 mb-5">{plansElements}</div>

        <BillingPeriod />
      </div>

      <FooterNav checkInfo={checkInfo} />
    </div>
  );
}

export default Plan;
