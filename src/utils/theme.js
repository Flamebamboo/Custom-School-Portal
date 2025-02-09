import { themePresets } from "../config/themes";

export const getInitialTheme = () => {
  return localStorage.getItem("themePreset") || "light";
};

export const applyTheme = (preset) => {
  const rootElement = document.documentElement;
  const themeVariables = themePresets[preset].variables;

  Object.entries(themeVariables).forEach(([key, value]) => {
    rootElement.style.setProperty(key, value);
  });

  localStorage.setItem("themePreset", preset);
};
