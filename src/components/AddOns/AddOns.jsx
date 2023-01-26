import React, { useContext } from "react";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import AddOnElements from "./components/AddOnElements";
import StepContext from "@/utils/contexts/stepContext";
import { addOnInfo } from "@/utils/data/data";
import UserData from "@/utils/contexts/UserData";
import SectionNav from "../FooterNav/SectionNav";

function AddOns() {
  const { setStep } = useContext(StepContext);

  function nextStep() {
    setStep((oldStep) => oldStep + 1);
  }

  return (
    <div className="sub-card">
      <div className="card-component">
        <h1 className="card-header">Pick add-ons</h1>
        <p className="text-CoolGray mb-3">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col gap-4 mb-5">
          <AddOnElements addOnInfo={addOnInfo} />
        </div>
        <SectionNav checkInfo={nextStep} />
      </div>

      <FooterNav checkInfo={nextStep} />
    </div>
  );
}

export default AddOns;
