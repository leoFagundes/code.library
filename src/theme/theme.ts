type ThemeType = {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  quaternaryColor: string;
  textColor: string;
  mainWhite: string;
  mainBlack: string;
  pageTopPadding: string;
  primaryRadialGradientBackground?: string;
};

const baseTheme: ThemeType = {
  primaryColor: "#19212c",
  secondaryColor: "#2E3944",
  tertiaryColor: "#124E66",
  quaternaryColor: "#748D92",
  textColor: "#D3D9D4",
  mainWhite: "#F9F9F9",
  mainBlack: "#222326",
  pageTopPadding: "70px",
};

function generateprimaryRadialGradient(theme: ThemeType): string {
  return `radial-gradient(
    circle,
    ${theme.tertiaryColor}75 0%,
    ${theme.primaryColor}50 90%
  )`;
}

const theme: ThemeType = {
  ...baseTheme,
  primaryRadialGradientBackground: generateprimaryRadialGradient(baseTheme),
};

export default theme;
