import React from "react";
import ThemeContext from "../../theme/theme-context";
import { ThemeContext } from "../../theme/types";

const useTheme = (): ThemeContext =>
  React.useContext<ThemeContext>(ThemeContext);

export default useTheme;
