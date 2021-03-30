import * as React from "react";
import { context } from ".";

function Provider({ children }) {
  const initialTheme = () => {
    if (typeof window === "undefined") {
      return false;
    }

    const theme = JSON.parse(localStorage.getItem("THEME")) || false;
    return theme;
  };
  const [darkMode, setDarkMode] = React.useState<boolean>(initialTheme);

  const changeTheme = () => {
    setDarkMode((value) => {
      const newValue = !value;
      localStorage.setItem("THEME", JSON.stringify(newValue));
      return newValue;
    });
  };

  return (
    <context.Provider value={{ darkMode, changeTheme }}>
      {children}
    </context.Provider>
  );
}

export default Provider;
