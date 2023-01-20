import React, { useContext, useState } from "react";
import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";
import AddOnElements from "./components/AddOnElements";
import UserData from "@/utils/contexts/UserData";
import StepContext from "@/utils/contexts/stepContext";

function AddOns() {
  const { setStep } = useContext(StepContext);

  const addOnInfo = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      monthlyPrice: 1,
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      monthlyPrice: 2,
    },
    {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      monthlyPrice: 2,
    },
  ];

  function selectAddOn(params) {}

  function nextStep() {
    setStep((oldStep) => oldStep + 1);
  }

  return (
    <div>
      <div className="card-component">
        <h1 className="card-header">Pick add-ons</h1>
        <p className="text-CoolGray mb-3">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col gap-4 mb-5">
          <AddOnElements addOnInfo={addOnInfo} selectAddOn={selectAddOn} />
        </div>
      </div>

      <FooterNav checkInfo={nextStep} />
    </div>
  );
}

export default AddOns;
