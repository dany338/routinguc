const colors = {
  white: "#fff",
  black: "#000",
  primaryBlue: "#3366cc",
  primaryBlueLight: "#6896fc",
  fuchsia: "#F42F63",
  fuchsiaDark: "#7d203e",

  lightGrey: "#CCCCCC",
  mediumGrey: "#8d8d8d",
  darkGrey: "#4A4A4F",
  darkGreyDarken: "#1b1b20",

  teal: "#459d8e",
  lightTeal: "#E2ECED",
  darkTeal: "#286357",

  grainsboro: "#e6e6e6",
  ceruleanblue: "#3366CC",
  bluelagoon: "#06616c",
  mayablue: "#6896FC",
  bastille: "#323234",
  sun: "#F08439",
  staleblue: "#6369d1",
  cadetblue: "#5c9ead",
  darkmidnightblue: "#033860",
  romansilver: "#8d8d92"
};

const themes = {
  dark: {
    colors,
    secondaryColor: colors.mayablue
  },
  light: {
    colors,
    black: colors.black,
    primaryColor: colors.fuchsia,
    primaryColorDark: colors.fuchsiaDark,
    secondaryColor: colors.primaryBlue,
    secondaryColorLight: colors.primaryBlueLight,
    complementaryColor: colors.lightTeal,
    complementaryColorDark: colors.darkTeal,
    hoverColor: colors.bluelagoon,
    secondaryHoverColor: colors.cadetblue,
    headerTextColor: colors.black,
    pageBackground: colors.lightGrey,
    headerBackgrond: colors.white,
    sideBarBackground: colors.darkGrey,
    sideBarBackgroundHover: colors.darkGreyDarken,
    footerBackground: colors.grainsboro,
    cardShadow: `0px 3px 6px -1px ${colors.darkGrey}`,
    dropdownMenuShadow: `3px 3px 10px -2px ${colors.darkGrey}`
  },
  test: {
    colors,
    primaryColor: colors.teal,
    secondaryColor: colors.ceruleanblue,
    complementaryColor: colors.lightTeal,
    hoverColor: colors.bluelagoon,
    secondaryHoverColor: colors.romansilver,

    headerTextColor: colors.white,

    pageBackground: colors.verylightgrey,
    headerBackgrond: colors.bastille,
    sideBarBackground: colors.darkGrey,
    footerBackground: colors.grainsboro,

    cardShadow: `3px 3px 3px ${colors.black}`,
    dropdownMenuShadow: `3px 3px 10px -2px ${colors.darkGrey}`
  }
};

export default themes;
