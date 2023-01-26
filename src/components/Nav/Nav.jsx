import "@/index.css";
import navBgMobile from "@/assets/images/bg-sidebar-mobile.svg";
import navBgDesktop from "@/assets/images/bg-sidebar-desktop.svg";
import { useContext } from "react";
import StepContext from "@/utils/contexts/stepContext";
import DarkThemeContext from "@/utils/contexts/DarkThemeContext";

function Nav() {
  const navHeaders = ["your info", "select plan", "add-ons", "summary"];
  const { step } = useContext(StepContext);
  const { darkTheme } = useContext(DarkThemeContext);

  const navLinksElements = navHeaders.map((stepTitle, index) => {
    const activeHeaderStyle =
      step == index || (step > 3 && index == navHeaders.length - 1)
        ? `text-MarineBlue ${
            darkTheme ? "text-Magnolia" : ""
          } font-bold bg-PastelBlue border-PastelBlue`
        : "";

    return (
      <li key={index} className="flex gap-2 items-end">
        <span
          className={`w-10 md:w-7 aspect-square border-2 grid content-center 
          text-center rounded-full ${activeHeaderStyle} md:text-xs md:border transition-all`}
        >
          {index + 1}
        </span>
        <div className="flex-col hidden md:flex">
          <span className="text-LightGray text-[10px] leading-none font-normal">
            STEP {index + 1}
          </span>
          <span className="text-sm font-normal uppercase">{stepTitle}</span>
        </div>
      </li>
    );
  });

  return (
    <nav
      className={`py-[1.5rem] pb-[6rem] relative text-NavText
      font-medium isolate capitalize md:px-4 md:min-w-[200px]
    before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 
    before:bg-NavBg md:before:rounded-lg before:-z-10`}
    >
      <ul className="flex justify-center gap-4 md:gap-5 md:flex-col">
        {navLinksElements}
      </ul>
      <picture>
        <source media="(min-width:768px)" srcSet={navBgDesktop} />
        <img
          src={navBgMobile}
          alt="nav background"
          className={`w-full h-full absolute top-0 left-0 -z-[1] object-cover
           md:rounded-xl ${darkTheme ? "hidden" : ""}`}
        />
      </picture>
    </nav>
  );
}

export default Nav;
