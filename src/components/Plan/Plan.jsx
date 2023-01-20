import React, { useContext, useState } from "react";
import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import BillingPeriod from "./components/BillingPeriod";
import PlanElements from "./components/PlanElements";
import UserData from "@/utils/contexts/UserData";
import StepContext from "@/utils/contexts/stepContext";

function Plan() {
  const { billingPlan, setBillingPlan } = useContext(UserData);
  const { setStep } = useContext(StepContext);

  const plansInfo = [
    { name: "arcade", priceMonth: 9, icon: arcadeIcon },
    { name: "advanced", priceMonth: 12, icon: advancedIcon },
    { name: "pro", priceMonth: 15, icon: proIcon },
  ];

  function selectPlan(planIndex) {
    setBillingPlan((oldValue) => ({
      ...oldValue,
      name: plansInfo[planIndex].name,
    }));
  }

  function nextStep() {
    setStep((oldStep) => oldStep + 1);
  }

  return (
    <div>
      <div className="card-component">
        <h1 className="card-header">Select your plan</h1>
        <p className="text-CoolGray mb-3">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col gap-4 mb-5">
          <PlanElements
            plansInfo={plansInfo}
            billingPlan={billingPlan}
            selectPlan={selectPlan}
          />
        </div>

        <BillingPeriod
          billingPlan={billingPlan}
          setBillingPlan={setBillingPlan}
        />
      </div>

      <FooterNav checkInfo={nextStep} />
    </div>
  );
}

export default Plan;
