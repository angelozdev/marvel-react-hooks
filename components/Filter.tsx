import { charactersContext } from "context";
import * as React from "react";
import { getData } from "utils";

/* Local types */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function Filter() {
  const [characters, setCharacters] = React.useContext(charactersContext);
  const [filterValue, setFilterValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // helper methods
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

  const handleClick = async () => {
    setIsLoading(true);
    const { results } = await getData({
      url: "characters",
      params: { limit: 18, nameStartsWith: filterValue },
    });

    setCharacters({
      ...characters,
      filtered: results,
    });

    setIsLoading(false);
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
      <button
        onClick={handleClick}
        disabled={!filterValue || isLoading}
        className="button"
      >
        {isLoading ? "LOADING..." : "SEARCH"}
      </button>
    </div>
  );
}

export default React.memo(Filter);
