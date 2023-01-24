import React from "react";
import thankYouIcon from "@/assets/images/icon-thank-you.svg";
import { useContext } from "react";
import StepContext from "@/utils/contexts/stepContext";

function ThankYou() {
  const { setStep } = useContext(StepContext);

  function replay() {
    setStep(0);
  }

  return (
    <div className="sub-card">
      <div className="card-component flex flex-col items-center text-center py-[4rem]">
        <img className="max-w-[3rem] mb-4" src={thankYouIcon} alt="thank you" />
        <h1 className="card-header">Thank you!</h1>
        <p className="text-CoolGray mb-4">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
        <button
          onClick={replay}
          className="bg-MarineBlue hover:bg-PurplishBlue transition-all text-White p-2 px-4 rounded-md"
        >
          Replay
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
