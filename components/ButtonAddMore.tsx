import { charactersContext } from "context";
import * as React from "react";
import { getData } from "utils";

function ButtonAddMore() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [characters, setCharacters] = React.useContext(charactersContext);

  const handleSeeMore = async () => {
    setIsLoading(true);
    const { results } = await getData({
      url: "characters",
      params: {
        limit: 6,
        offset: characters.all.length + 1,
      },
    });

    setCharacters({
      ...characters,
      all: [...characters.all, ...results],
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
