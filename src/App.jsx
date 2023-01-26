import "@/index.css";
import MainContent from "@/Pages/MainContent";
import Nav from "@/components/Nav/Nav";
import { useState } from "react";
import StepContext from "@/utils/contexts/stepContext";
import DarkThemeContext from "./utils/contexts/DarkThemeContext";
import { useEffect } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (darkTheme == true) document.body.classList.add("dark-theme");
    else document.body.classList.remove("dark-theme");
  }, [darkTheme]);

  return (
    <main className="min-h-screen grid font-ubuntu bg-Magnolia text-sm md:place-items-center">
      <div
        className="flex flex-col md:flex-row md:bg-White md:drop-shadow-lg
      md:p-3 md:rounded-lg md:min-h-[450px] md:min-w-[700px] overflow-x-hidden md:overflow-visible"
      >
        <StepContext.Provider value={{ step: step, setStep: setStep }}>
          <DarkThemeContext.Provider
            value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
          >
            <Nav />
            <MainContent />
          </DarkThemeContext.Provider>
        </StepContext.Provider>
      </div>
    </main>
  );
}

export default App;
