import { charactersContext } from "context";
import * as React from "react";
import { getData } from "utils";

function ButtonAddMore() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [characters, setCharacters] = React.useContext(charactersContext);

  const handleSeeMore = async () => {
    setIsLoading(true);

    const { all, filterValue, filtered } = characters;

    let params = {
      limit: 6,
      offset: all.length + 1,
      nameStartsWith: null,
    };

    if (filterValue) {
      params = {
        ...params,
        offset: filtered.length + 1,
        nameStartsWith: filterValue,
      };
    }

    const { results } = await getData({
      url: "characters",
      params,
    });

    setCharacters({
      ...characters,
      all: filterValue ? all : [...characters.all, ...results],
      filtered: [...characters.filtered, ...results],
    });
    setIsLoading(false);
  };

  return (
    <div className="">
      <button
        disabled={isLoading}
        onClick={handleSeeMore}
        type="button"
        className={`button ${isLoading ? "active" : ""}`}
      >
        {isLoading ? "LOADING..." : "SEE MORE"}
      </button>
    </div>
  );
}

export default ButtonAddMore;
