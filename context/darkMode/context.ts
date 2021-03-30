import * as React from "react";

/* Local types */
interface Context {
  darkMode: boolean;
  changeTheme?: () => void;
}

export const darkModeContext = React.createContext<Context>({
  darkMode: false,
});

export default darkModeContext;
