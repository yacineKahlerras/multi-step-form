import StepContext from "@/utils/contexts/stepContext";
import React, { useContext, useState } from "react";
import PersonnalInfo from "@/components/PersonnalInfo/PersonnalInfo.jsx";
import Plan from "@/components/Plan/Plan";
import UserData from "@/utils/contexts/UserData";
import AddOns from "@/components/AddOns/AddOns";
import { defaultPersonnalInfo, plansInfo, addOnInfo } from "@/utils/data/data";

function MainContent() {
  const { step } = useContext(StepContext);
  const [userInfo, setUserInfo] = useState(defaultPersonnalInfo);
  const [billingPlan, setBillingPlan] = useState({
    name: "arcade",
    billingPer: "month",
  });
  const [addOnIndexes, setAddOnIndexes] = useState(new Set([0, 1]));

  const data = {
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    billingPlan: billingPlan,
    setBillingPlan: setBillingPlan,
    addOnIndexes: addOnIndexes,
    setAddOnIndexes: setAddOnIndexes,
  };

  const stepPages = [<PersonnalInfo />, <Plan />, <AddOns />];

  return (
    <div>
      <UserData.Provider value={data}>{stepPages[step]}</UserData.Provider>
    </div>
  );
}

export default MainContent;
