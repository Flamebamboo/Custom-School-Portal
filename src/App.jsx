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
import FormButton from "./components/Forms";

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
          <section className="flex w-full items-start ml-28 justify-center flex-col py-16 bg-muted/30">
            <h2 className="text-3xl text-center ml-6 mb-8 text-primary font-display font-bold">
              Help & Support
            </h2>
            <div className="flex flex-col gap-4 w-full max-w-2xl px-4">
              <FormButton
                icon="MessageSquare"
                link="https://docs.google.com/a/burnside.school.nz/forms/d/e/1FAIpQLSfAD0VPZiA55Weu-N9AzQlD2fYxMSx975cNVjDkokotlyZHvQ/viewform"
              >
                Counsellors Appointment Request
              </FormButton>
              <FormButton
                icon="ShieldAlert"
                link="https://docs.google.com/a/burnside.school.nz/forms/d/e/1FAIpQLSdcbaV69k85cOqW2vzDzPPKHRMziTa_eLwj4EkN4-4Zn8dhVQ/viewform"
              >
                Bullying Incident Report
              </FormButton>
              <FormButton
                icon="HeartPulse"
                link="https://docs.google.com/a/burnside.school.nz/forms/d/e/1FAIpQLSfWvNBM_Hg75wfttEQrMfU48nTKEcTT-q8THa56D4jZmgAJ7g/viewform"
              >
                Public Health Nurse Appointment
              </FormButton>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
