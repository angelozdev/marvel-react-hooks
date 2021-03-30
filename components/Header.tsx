import * as React from "react";

/* Context */
import { darkModeContext } from "context";

function Header() {
  const { darkMode, changeTheme } = React.useContext(darkModeContext);

  // helper methods
  const handleClick = () => {
    changeTheme();
  };

  React.useEffect(() => {
    console.log("HEADER RENDER");
  });

  return (
    <header className="header__container">
      <div className="header__wrapper wrapper">
        <div className="header__content">
          <h1 className="header__title">Marvel with hooks</h1>
          <button className="button transition-300" onClick={handleClick}>
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
