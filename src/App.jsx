import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { getInitialTheme, applyTheme } from "./utils/theme";
import CommonSites from "./components/CommonSites";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        <main
          className={`flex-1 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <CommonSites />
        </main>
      </div>
    </div>
  );
}

export default App;
