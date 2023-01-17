import React from "react";
import arcadeIcon from "@/assets/images/icon-arcade.svg";
import advancedIcon from "@/assets/images/icon-advanced.svg";
import proIcon from "@/assets/images/icon-pro.svg";
import FooterNav from "@/components/FooterNav/FooterNav.jsx";

function Plan(props) {
  const plansInfo = [
    { name: "Arcade", priceMonth: 9, icon: arcadeIcon },
    { name: "Advanced", priceMonth: 9, icon: advancedIcon },
    { name: "Pro", priceMonth: 9, icon: proIcon },
  ];

  function checkInfo() {}

  return (
    <div>
      <div className="card-component">
        <h1 className="card-header">Select your plan</h1>
        <p className="text-CoolGray text-sm mb-3">
          You have the option of monthly or yearly billing.
        </p>
        <form className="flex flex-col gap-3">
          {/* <FormInputs fieldsInfo={fieldsInfo} /> */}
        </form>
      </div>

      <FooterNav checkInfo={checkInfo} />
    </div>
  );
}

export default Plan;
