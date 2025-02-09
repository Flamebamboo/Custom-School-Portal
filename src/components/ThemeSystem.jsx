import React, { useState, useEffect } from "react";

const ThemeSystem = ({ isCollapsed }) => {
  const [theme, setTheme] = useState("blue");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "blue" ? "green" : "blue"));
  };
  return (
    <button
      onClick={toggleTheme}
      class={`w-full p-3 rounded-lg flex items-center justify-start hover:bg-gray-700 cursor-pointer 
              transition-colors duration-200 text-gray-100
              ${isCollapsed ? "text-center" : "px-4"}`}
    >
      Custom Themes
    </button>
  );
};

export default ThemeSystem;
