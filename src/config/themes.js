export const themePresets = {
  //random AI gen for now really trash gonna fix them later
  light: {
    name: "Light",
    variables: {
      "--font-display": "Inter, sans-serif",
      "--color-background": "rgba(247, 252, 251)",
      "--color-foreground": "#EFF3EA",
      "--color-primary": "rgba(0,0,0)",
      "--color-secondary": "#FFFDF0",
      "--color-accent": "#D9EAFD",
    },
  },
  dark: {
    name: "Dark",
    variables: {
      "--font-display": "Inter, sans-serif",
      "--color-background": "rgba(33, 37, 41, 1)",
      "--color-foreground": "rgba(248, 249, 250, 1)",
      "--color-primary": "rgba(255, 255, 255, 1)",
      "--color-secondary": "rgba(108, 117, 125, 1)",
      "--color-accent": "rgba(13, 202, 240, 1)",
    },
  },
  tokyoNight: {
    name: "Tokyo Night",
    variables: {
      "--font-display": "Roboto, sans-serif",
      "--color-background": "rgba(26, 27, 38, 1)",
      "--color-foreground": "rgba(169, 177, 214, 1)",
      "--color-primary": "rgba(255, 255, 255, 1)",
      "--color-secondary": "rgba(86, 95, 137, 1)",
      "--color-accent": "rgba(187, 154, 247, 1)",
    },
  },
  nord: {
    name: "Nord",
    variables: {
      "--font-display": "Public Sans, sans-serif",
      "--color-background": "rgba(46, 52, 64, 1)",
      "--color-foreground": "rgba(236, 239, 244, 1)",
      "--color-primary": "rgba(255, 255, 255, 1)",
      "--color-secondary": "rgba(129, 161, 193, 1)",
      "--color-accent": "rgba(143, 188, 187, 1)",
    },
  },
  solarizedDark: {
    name: "Solarized Dark",
    variables: {
      "--font-display": "Fira Code, monospace",
      "--color-background": "rgba(0, 43, 54, 1)",
      "--color-foreground": "rgba(131, 148, 150, 1)",
      "--color-primary": "rgba(255, 255, 255, 1)",
      "--color-secondary": "rgba(88, 110, 117, 1)",
      "--color-accent": "rgba(42, 161, 152, 1)",
    },
  },

  //Custom pallete for bhs taken from Chris repo

  BHSTheme: {
    name: "BHS Theme",
    variables: {
      "--font-display": "Public Sans, sans-serif",
      "--color-background": "rgba(7, 47, 37, 1)",
      "--color-foreground": "rgba(0, 78, 66, 1)",
      "--color-primary": "rgba(255, 255, 255, 1)",
      "--color-secondary": "rgba(7, 55, 44, 1)",
      "--color-accent": "rgba(41, 104, 92, 1)",
    },
  },
};
