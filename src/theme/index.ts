export const theme = {
  background: "#FFFFFF",
  text: {
    primary: "#08080e",
    secondary: "#7d7f91",
    disabled: "#a8a9b5",
  },
  primary: {
    main: "rgb(4, 69, 175)",
    100: "rgba(4, 69, 175, 0.1)",
    200: "rgba(4, 69, 175, 0.2)",
    300: "rgba(4, 69, 175, 0.3)",
    400: "rgba(4, 69, 175, 0.4)",
    500: "rgba(4, 69, 175, 0.5)",
    600: "rgba(4, 69, 175, 0.6)",
    700: "rgba(4, 69, 175, 0.7)",
    800: "rgba(4, 69, 175, 0.8)",
    900: "rgba(4, 69, 175, 0.9)",
    light: "rgb(42, 97, 187)",
  },
  error: {
    main: '#f44336',
    light: '#f6695e',
    dark: '#c3362b',
    contrastText: '#FEECEB',
  },
  success: {
    main: '#66bb6a',
    light: '#85c988',
    dark: '#529655',
    contrastText: '#142515',
  },
  radius: "6px",
  spacing: (factor: number) => `${factor * 8}px`,
};

