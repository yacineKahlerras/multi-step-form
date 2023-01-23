import React, { useContext } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import BillingPeriod from "./components/BillingPeriod";
import PlanElements from "./components/PlanElements";
import StepContext from "@/utils/contexts/stepContext";

function Plan() {
  const { setStep } = useContext(StepContext);

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
          <PlanElements />
        </div>

        <BillingPeriod />
      </div>

      <FooterNav checkInfo={nextStep} />
    </div>
  );
}

export default Plan;
