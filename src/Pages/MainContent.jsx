import StepContext from "@/utils/contexts/stepContext";
import React, { useContext } from "react";
import PersonnalInfo from "@/components/PersonnalInfo/PersonnalInfo.jsx";
import Plan from "@/components/Plan/Plan";

function MainContent(props) {
  const { step } = useContext(StepContext);

  const stepPages = [<PersonnalInfo />, <Plan />];

  return <div>{stepPages[step]}</div>;
}

export default MainContent;
