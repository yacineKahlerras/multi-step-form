import StepContext from "@/utils/contexts/stepContext";
import React, { useContext } from "react";
import PersonnalInfo from "@/components/PersonnalInfo/PersonnalInfo.jsx";

function MainContent(props) {
  const { step } = useContext(StepContext);

  const stepPages = [<PersonnalInfo />];

  return <div>{stepPages[step]}</div>;
}

export default MainContent;
