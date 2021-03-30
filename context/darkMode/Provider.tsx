import * as React from "react";
import { context } from ".";

function Provider({ children }) {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    const valueFromLocalStorage = (): boolean => {
      const theme = JSON.parse(
        localStorage ? localStorage.getItem("THEME") : "false"
      );
      return theme;
    };

    setDarkMode(valueFromLocalStorage());
  }, []);

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
