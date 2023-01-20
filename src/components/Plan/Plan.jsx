import React, { useContext, useState } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import BillingPeriod from "./components/BillingPeriod";
import PlanElements from "./components/PlanElements";
import UserData from "@/utils/contexts/UserData";
import StepContext from "@/utils/contexts/stepContext";
import { plansInfo } from "@/utils/data/data";

function Plan() {
  const { billingPlan, setBillingPlan } = useContext(UserData);
  const { setStep } = useContext(StepContext);

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
