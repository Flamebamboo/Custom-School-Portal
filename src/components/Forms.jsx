import { useEffect, useState } from "react";
import { getInitialTheme, applyTheme } from "../utils/theme";
import {
  MessageSquare,
  ShieldAlert,
  HeartPulse,
  ArrowRight,
  X,
} from "lucide-react";

const icons = {
  MessageSquare,
  ShieldAlert,
  HeartPulse,
};

export default function FormButton({ children, icon, link }) {
  const [theme, setTheme] = useState(getInitialTheme());
  const Icon = icons[icon];

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => link && window.open(link, "_blank")}
        className="group relative flex items-center gap-3 w-full px-6 py-4 text-left rounded-xl bg-card hover:bg-accent text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg border border-border"
      >
        <div className="flex items-center gap-3 flex-1">
          {Icon && (
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon size={22} />
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-semibold text-primary">{children}</span>
            <span className="text-sm text-primary">Click to open form</span>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </button>
    </>
  );
}
