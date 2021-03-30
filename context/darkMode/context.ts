import * as React from "react";

/* Local types */
interface Context {
  darkMode: boolean;
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const darkModeContext = React.createContext<Context>({
  darkMode: false,
});

export default darkModeContext;
