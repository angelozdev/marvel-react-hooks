import * as React from "react";

function Filter({ value, handleOnChange }) {
  React.useEffect(() => {
    console.log("FILTER RENDER");
  });

  return (
    <div className="filter__container">
      <input
        className="input transition-300"
        type="text"
        value={value}
        onChange={handleOnChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default Filter;
