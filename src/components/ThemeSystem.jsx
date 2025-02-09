import { useState, useEffect } from "react";
import { getInitialTheme, applyTheme } from "../utils/theme";
import { themePresets } from "../config/themes";

const ThemeSystem = ({ isCollapsed }) => {
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const cycleTheme = () => {
    const presets = Object.keys(themePresets);
    const currentIndex = presets.indexOf(currentTheme);
    const nextTheme = presets[(currentIndex + 1) % presets.length];
    setCurrentTheme(nextTheme);
  };

  return (
    <button
      onClick={cycleTheme}
      className="w-full p-3 rounded-lg flex items-center justify-start 
                bg-primary text-background hover:bg-accent cursor-pointer 
                transition-colors duration-200"
    >
      {isCollapsed ? "T" : `Theme: ${themePresets[currentTheme].name}`}
    </button>
  );
};

export default ThemeSystem;
