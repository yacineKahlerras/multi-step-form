import "@/index.css";
import navBgMobile from "@/assets/images/bg-sidebar-mobile.svg";

function App() {
  const navHeaders = ["your info", "select plan", "add-ons", "summary"];

  const navLinksElements = navHeaders.map((stepTitle, index) => {
    return (
      <li key={index} className="flex gap-2">
        <span className="w-10 h-10 m-2 border grid content-center text-center rounded-full">
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
    <main className="min-h-screen grid justify-center font-ubuntu">
      <div className="flex flex-col">
        <nav className="py-[3rem] relative">
          <ul className="flex justify-center">{navLinksElements}</ul>
          <img
            className="absolute top-0 left-0 object-cover -z-[1]"
            src={navBgMobile}
            alt="nav-bg"
          />
        </nav>
      </div>
    </main>
  );
}

export default App;
