import { charactersContext } from "context";
import * as React from "react";

/* Local types */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function Filter() {
  const [characters, setCharacters] = React.useContext(charactersContext);
  const [filterValue, setFilterValue] = React.useState("");

  const handleChange = (event: ChangeEvent) => {
    const filterValue = event.target.value || "";
    setFilterValue(filterValue);

    setCharacters({
      ...characters,
      filtered: characters.all.filter(({ name }) => {
        if (!filterValue) true;
        return name.toLowerCase().includes(filterValue.toLowerCase());
      }),
    });
  };

  React.useEffect(() => {
    console.log("FILTER RENDER");
  });

  React.useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <div className="filter__container">
      <input
        className="input transition-300"
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default React.memo(Filter);
