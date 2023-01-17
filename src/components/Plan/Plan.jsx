import React from "react";
import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";

function Plan(props) {
  const plansInfo = [
    { name: "Arcade", priceMonth: 9, icon: arcadeIcon },
    { name: "Advanced", priceMonth: 12, icon: advancedIcon },
    { name: "Pro", priceMonth: 15, icon: proIcon },
  ];

  const plansElements = plansInfo.map((plan, index) => {
    return (
      <div
        key={index}
        className="flex gap-3 items-center border border-spacing-1 border-LightGray rounded-lg px-2 py-2"
      >
        <img className="max-w-[2.5rem]" src={plan.icon} alt={plan.name} />
        <div className="flex flex-col">
          <h2 className="font-bold leading-none">{plan.name}</h2>
          <span className="text-CoolGray font-medium">
            ${plan.priceMonth}/mo
          </span>
        </div>
      </div>
    );
  });

  function checkInfo() {}

  return (
    <div>
      <div className="card-component">
        <h1 className="card-header">Select your plan</h1>
        <p className="text-CoolGray mb-3">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col gap-4">{plansElements}</div>
      </div>

      <FooterNav checkInfo={checkInfo} />
    </div>
  );
}

export default Plan;
