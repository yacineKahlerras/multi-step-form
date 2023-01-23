import StepContext from "@/utils/contexts/stepContext";
import React from "react";
import { useContext } from "react";

function FinishingUpElements(props) {
  const { setStep } = useContext(StepContext);
  const { billInfo, isYearly } = props;
  const yearlyCoefficent = isYearly ? 10 : 1;

  function changePlan() {
    setStep(1);
  }

  return billInfo.map((bill, index) => {
    return (
      <div
        key={index}
        className="flex justify-between items-center text-CoolGray first:border-b first:border-LightGray first:pb-3"
      >
        <div className="flex flex-col items-start">
          {/* title */}
          <h2
            className={`capitalize 
            ${index == 0 ? "text-MarineBlue font-medium" : ""}`}
          >
            {bill.title}{" "}
            {index == 0 ? (isYearly ? "(yearly)" : "(monthly)") : ""}
          </h2>

          {/* change plan */}
          <button
            onClick={changePlan}
            className={`capitalize underline ${index == 0 ? "" : "hidden"}`}
          >
            change
          </button>
        </div>

        {/* price */}
        <span className={`text-MarineBlue ${!index ? "font-bold" : ""}`}>
          +{bill.price * yearlyCoefficent}/{isYearly ? "yr" : "mo"}
        </span>
      </div>
    );
  });
}

export default FinishingUpElements;
