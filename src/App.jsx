import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { getInitialTheme, applyTheme } from "./utils/theme";

function App() {
  useEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-6">
          <h1 className="text-primary font-family text-6xl">
            Welcome To Customisable BHS Portal
          </h1>
        </main>
      </div>
    </div>
  );
}

export default App;
