import "./index.css";

function App() {
  const navHeaders = ["your info", "select plan", "add-ons", "summary"];

  const navLinksElements = navHeaders.map((stepTitle, index) => {
    return (
      <li className="flex flex-col gap-2">
        <div>
          <span>STEP {index + 1}</span>
          <span>{stepTitle}</span>
        </div>
      </li>
    );
  });

  return (
    <main className="min-h-screen grid items-center font-ubuntu">
      <div className="flex flex-col">
        <nav>
          <ul className="">{navLinksElements}</ul>
        </nav>
      </div>
    </main>
  );
}

export default App;
