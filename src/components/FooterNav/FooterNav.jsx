import StepContext from "@/utils/contexts/stepContext";
import React, { useContext } from "react";

function FooterNav(props) {
  const { step } = useContext(StepContext);
  const { checkInfo } = props;

  const BackBtn =
    step < 2 ? (
      ""
    ) : (
      <button type="button" className={`text-CoolGray font-medium text-sm`}>
        Go Back
      </button>
    );

  const NextBtn = (
    <button
      type="button"
      onClick={checkInfo}
      className={`text-White bg-MarineBlue hover:bg-PurplishBlue rounded-md py-[.5em] px-[1.5em] max-w-[10rem] ml-auto`}
    >
      Next Step
    </button>
  );

  return (
    <div className="w-full py-3 px-6 absolute bottom-0 left-0 bg-White drop-shadow-2xl">
      <div className="mx-auto flex">
        {BackBtn}
        {NextBtn}
      </div>
    </div>
  );
}

export default FooterNav;