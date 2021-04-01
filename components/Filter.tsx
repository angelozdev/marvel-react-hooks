import { charactersContext } from "context";
import * as React from "react";
import { getData } from "utils";

/* Local types */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function Filter() {
  const [characters, setCharacters] = React.useContext(charactersContext);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // helper methods
  const handleChange = (event: ChangeEvent) => {
    const filterValue = event.target.value || "";
    setCharacters({
      ...characters,
      filterValue,
      filtered: characters.all.filter(({ name }) => {
        if (!filterValue) true;
        return name.toLowerCase().includes(filterValue.toLowerCase());
      }),
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsLoading(true);
    const { results } = await getData({
      url: "characters",
      params: {
        limit: 6,
        nameStartsWith: characters.filterValue,
      },
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

  return (
    <form onSubmit={handleSubmit} className="filter__container">
      <input
        className="input transition-300"
        type="text"
        value={characters.filterValue}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button
        type="submit"
        disabled={!characters.filterValue || isLoading}
        className="button"
      >
        {isLoading ? "LOADING..." : "SEARCH"}
      </button>
    </form>
  );
}

export default React.memo(Filter);
