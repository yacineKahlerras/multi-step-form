import "@/index.css";
import navBgMobile from "@/assets/images/bg-sidebar-mobile.svg";
import navBgDesktop from "@/assets/images/bg-sidebar-desktop.svg";
import { useContext } from "react";
import StepContext from "@/utils/contexts/stepContext";

function Nav() {
  const navHeaders = ["your info", "select plan", "add-ons", "summary"];
  const { step } = useContext(StepContext);

  const navLinksElements = navHeaders.map((stepTitle, index) => {
    return (
      <li key={index} className="flex gap-2">
        <span
          className={`w-10 h-10 m-2 border-2 grid content-center text-center rounded-full 
          ${
            step != index + 1
              ? ""
              : "text-MarineBlue font-bold bg-PastelBlue border-PastelBlue"
          }`}
        >
          {index + 1}
        </span>
        <div className="flex-col gap-1 hidden lg:flex">
          <span>STEP {index + 1}</span>
          <span>{stepTitle}</span>
        </div>
      </li>
    );
  });

  return (
    <nav className="py-[1.5rem] pb-[6rem] relative text-White font-medium isolate">
      <ul className="flex justify-center">{navLinksElements}</ul>
      <picture>
        <source media="(min-width:900px)" srcSet={navBgDesktop} />
        <img
          src={navBgMobile}
          alt="nav background"
          className="w-full h-full absolute top-0 left-0 -z-[1] object-cover"
        />
      </picture>
    </nav>
  );
}

export default Nav;
