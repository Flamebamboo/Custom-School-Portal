import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { getInitialTheme, applyTheme } from "./utils/theme";
import CommonSites from "./components/CommonSites";
import { QuickAccessCard } from "./components/QuickAccess";

//icons
import {
  BookOpen,
  Calendar,
  Cloud,
  FileText,
  Library,
  School,
  Users,
} from "lucide-react";

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
          <section className="flex w-full items-center justify-center flex-col">
            <h1 className="text-4xl text-center m-6 pt-6 text-primary font-display font-bold">
              Quick Access
            </h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full px-20 py-10 bg-background">
              <QuickAccessCard
                title="NZQA Information"
                icon={FileText}
                href="#"
              />
              <QuickAccessCard title="Library" icon={Library} href="#" />
              <QuickAccessCard title="Student Council" icon={Users} href="#" />
              <QuickAccessCard title="Senior Division" icon={School} href="#" />
              <QuickAccessCard title="Newsletters" icon={BookOpen} href="#" />
              <QuickAccessCard
                title="Sports Handbook"
                icon={Calendar}
                href="#"
              />
              <QuickAccessCard title="Sports Draw" icon={Calendar} href="#" />
              <QuickAccessCard title="Google Drive" icon={Cloud} href="#" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
