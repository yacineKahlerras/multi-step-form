import StepContext from "@/utils/contexts/stepContext";
import React, { useContext } from "react";
import PersonnalInfo from "./components/PersonnalInfo";

function MainContent(props) {
  const step = useContext(StepContext);

  return (
    <div>
      <PersonnalInfo />
    </div>
  );
}

export default MainContent;
