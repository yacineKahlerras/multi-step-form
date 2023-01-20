import StepContext from "@/utils/contexts/stepContext";
import React, { useContext, useState } from "react";
import PersonnalInfo from "@/components/PersonnalInfo/PersonnalInfo.jsx";
import Plan from "@/components/Plan/Plan";
import UserData from "@/utils/contexts/UserData";

function MainContent(props) {
  const { step } = useContext(StepContext);
  const [userInfo, setUserInfo] = useState({
    name: "Stephen King",
    email: "stephenking@lorem.com",
    phone: "+1234567890",
  });
  const [billingPlan, setBillingPlan] = useState({
    name: "arcade",
    billingPer: "month",
  });

  const data = {
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    billingPlan: billingPlan,
    setBillingPlan: setBillingPlan,
  };

  const stepPages = [<PersonnalInfo />, <Plan />];

  return (
    <div>
      <UserData.Provider value={data}>{stepPages[step]}</UserData.Provider>
    </div>
  );
}

export default MainContent;
