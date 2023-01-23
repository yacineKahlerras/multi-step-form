import "@/index.css";
import navBgMobile from "@/assets/images/bg-sidebar-mobile.svg";
import navBgDesktop from "@/assets/images/bg-sidebar-desktop.svg";
import { useContext } from "react";
import StepContext from "@/utils/contexts/stepContext";

function Nav() {
  const navHeaders = ["your info", "select plan", "add-ons", "summary"];
  const { step } = useContext(StepContext);

  const navLinksElements = navHeaders.map((stepTitle, index) => {
    const activeHeaderStyle =
      step == index || (step > 3 && index == navHeaders.length - 1)
        ? "text-MarineBlue font-bold bg-PastelBlue border-PastelBlue"
        : "";

    return (
      <li key={index} className="flex gap-2 items-center">
        <span
          className={`w-10 md:w-6 aspect-square m-2 border-2 grid content-center 
          text-center rounded-full ${activeHeaderStyle} md:text-[10px] md:border`}
        >
          {index + 1}
        </span>
        <div className="flex-col hidden md:flex">
          <span className="text-LightGray text-[10px]">STEP {index + 1}</span>
          <span className="leading-[.5rem] text-xs font-normal">
            {stepTitle}
          </span>
        </div>
      </li>
    );
  });

  return (
    <nav
      className="py-[1.5rem] pb-[6rem] relative text-White font-medium isolate 
    capitalize md:px-4 md:w-full md:max-w-[10rem]"
    >
      <ul className="flex justify-center md:flex-col md:gap-1">
        {navLinksElements}
      </ul>
      <picture>
        <source media="(min-width:768px)" srcSet={navBgDesktop} />
        <img
          src={navBgMobile}
          alt="nav background"
          className="w-full h-full absolute top-0 left-0 -z-[1] object-cover md:rounded-lg"
        />
      </picture>
    </nav>
  );
}

export default Nav;
