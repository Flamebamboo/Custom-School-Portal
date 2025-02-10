import { themePresets } from "../config/themes";

export const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themePreset");
  return savedTheme ? savedTheme : "BHSTheme";
};

export const applyTheme = (preset) => {
  const rootElement = document.documentElement;
  const themeVariables = themePresets[preset].variables;

  Object.entries(themeVariables).forEach(([key, value]) => {
    rootElement.style.setProperty(key, value);
  });

  localStorage.setItem("themePreset", preset);
};
