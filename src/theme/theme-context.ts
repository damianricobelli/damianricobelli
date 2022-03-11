import React from "react";
import { theme } from "./stitches.config";
import { PersonalUIThemeContext } from "./types";

export const defaultContext: PersonalUIThemeContext = {
  isDark: false,
  theme,
  type: "light",
};

const ThemeContext: React.Context<PersonalUIThemeContext> =
  React.createContext<PersonalUIThemeContext>(defaultContext);

export default ThemeContext;
