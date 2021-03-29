import * as React from "react";

function Header() {
  const [darkMode, setDarkMode] = React.useState(false);

  // helper methods
  const handleClick = () => {
    setDarkMode((value) => !value);
  };

  return (
    <div>
      <h1>React Hooks</h1>

      <button onClick={handleClick}>{darkMode ? "Light" : "Dark"} mode</button>
    </div>
  );
}

export default Header;
