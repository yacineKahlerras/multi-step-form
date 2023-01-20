import "@/index.css";
import MainContent from "@/Pages/MainContent";
import Nav from "@/components/Nav/Nav";
import { useState } from "react";
import StepContext from "@/utils/contexts/stepContext";

function App() {
  const [step, setStep] = useState(2);

  return (
    <main className="min-h-screen grid font-ubuntu bg-Magnolia text-sm">
      <div className=" flex flex-col">
        <StepContext.Provider value={{ step: step, setStep: setStep }}>
          <Nav />
          <MainContent />
        </StepContext.Provider>
      </div>
    </main>
  );
}

export default App;
