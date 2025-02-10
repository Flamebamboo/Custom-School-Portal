export const themePresets = {
  //random AI gen for now
  light: {
    name: "Light",
    variables: {
      "--color-background": "#ffffff",
      "--color-foreground": "#1a1a1a",
      "--color-primary": "#3f3cbb",
      "--color-secondary": "#78dcca",
      "--color-accent": "#3ab7bf",
    },
  },
  dark: {
    name: "Dark",
    variables: {
      "--color-background": "#1a1a1a",
      "--color-foreground": "#ffffff",
      "--color-primary": "#6366f1",
      "--color-secondary": "#78dcca",
      "--color-accent": "#3ab7bf",
    },
  },
  tokyoNight: {
    name: "Tokyo Night",
    variables: {
      "--color-background": "#1a1b26",
      "--color-foreground": "#a9b1d6",
      "--color-primary": "#7aa2f7",
      "--color-secondary": "#bb9af7",
      "--color-accent": "#f7768e",
    },
  },
  nord: {
    name: "Nord",
    variables: {
      "--font-display": "Public Sans, sans-serif",
      "--color-background": "#2e3440",
      "--color-foreground": "#eceff4",
      "--color-primary": "#88c0d0",
      "--color-secondary": "#81a1c1",
      "--color-accent": "#5e81ac",
    },
  },
  solarizedDark: {
    name: "Solarized Dark",
    variables: {
      "--color-background": "#002b36",
      "--color-foreground": "#839496",
      "--color-primary": "#268bd2",
      "--color-secondary": "#2aa198",
      "--color-accent": "#6c71c4",
    },
  },

  //Custom pallete for bhs taken from Chris repo

  BHSTheme: {
    name: "BHS Theme",
    variables: {
      "--font-display": "Public Sans, sans-serif",
      "--color-background": "rgb(7, 47, 37)",
      "--color-foreground": "rgb(0, 78, 66)",
      "--color-primary": "#ffff",
      "--color-secondary": "rgb(7, 55, 44)",
      "--color-accent": "rgb(41, 104, 92)",
    },
  },
};
