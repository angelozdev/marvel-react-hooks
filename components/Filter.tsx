import * as React from "react";

function Filter({ value, handleOnChange }) {
  React.useEffect(() => {
    console.log("FILTER RENDER");
  });

  return (
    <div>
      <input type="text" value={value} onChange={handleOnChange} />
    </div>
  );
}

export default Filter;
