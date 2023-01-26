import DarkThemeContext from "@/utils/contexts/DarkThemeContext";
import StepContext from "@/utils/contexts/stepContext";
import React, { useContext } from "react";

function SectionNav(props) {
  const { step, setStep } = useContext(StepContext);
  const { darkTheme } = useContext(DarkThemeContext);
  const { checkInfo } = props;

  function BackStep() {
    setStep((oldValue) => oldValue - 1);
  }

  const BackBtn =
    step < 1 ? (
      ""
    ) : (
      <button
        onClick={BackStep}
        type="button"
        className={`text-CoolGray font-medium text-sm`}
      >
        Go Back
      </button>
    );

  const NextBtn = (
    <button
      type="button"
      onClick={checkInfo}
      className={`text-White bg-MarineBlue hover:bg-PurplishBlue rounded-md transition-all
      py-[.5em] px-[1.5em] max-w-[10rem] ml-auto ${
        darkTheme ? "bg-NavBg hover:bg-PurplishBlue text-MarineBlue" : ""
      }`}
    >
      {step < 3 ? "Next Step" : "Comfirm"}
    </button>
  );

  return (
    <div className="hidden md:block w-full py-3 px-6 absolute bottom-0">
      <div className="max-w-xs mx-auto flex">
        {BackBtn}
        {NextBtn}
      </div>
    </div>
  );
}

export default SectionNav;
