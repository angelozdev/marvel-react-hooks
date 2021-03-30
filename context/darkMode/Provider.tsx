import * as React from "react";
import { context } from ".";

function Provider({ children }) {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <context.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </context.Provider>
  );
}

export default Provider;
