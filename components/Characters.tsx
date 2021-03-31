import * as React from "react";

/* Components */
import { Character, Filter } from "components";

/* Types */
import ICharacter from "types/character";
import { getData } from "utils";

/* Local Types */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface Props {
  characters: ICharacter[];
}

function Characters({ characters }: Props) {
  const [filterValue, setFilterValue] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [newCharacters, setNewCharacters] = React.useState<ICharacter[]>(
    characters
  );

  // helper methods
  const handleOnChange = React.useCallback((event: ChangeEvent) => {
    const newFilterValue = event.target.value;
    setFilterValue(newFilterValue);
  }, []);

  const handleSeeMore = async () => {
    setIsLoading(true);
    const { results } = await getData({
      url: "characters",
      params: {
        limit: 5,
        offset: newCharacters.length + 1,
      },
    });

    setNewCharacters((prev) => [...prev, ...results]);
    setIsLoading(false);
  };

  const filteredCharacters = React.useMemo(() => {
    return newCharacters.filter((character) => {
      if (!filterValue) return true;
      return character.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }, [filterValue, newCharacters]);

  // effects
  React.useEffect(() => {
    console.log("CHARACTERS RENDER");
  });

  return (
    <section className="characters__container">
      <div className="characters__wrapper wrapper">
        <div className="characters__content">
          <Filter value={filterValue} handleOnChange={handleOnChange} />

          <ul className="characters__grid">
            {filteredCharacters.map((character) => {
              const { name, description, id, thumbnail } = character;

              return (
                <Character
                  key={id}
                  thumbnail={thumbnail}
                  name={name}
                  description={
                    description ||
                    "This character doesn't have a description yet."
                  }
                />
              );
            })}
          </ul>

          <div className="">
            <button
              disabled={!!isLoading}
              onClick={handleSeeMore}
              type="button"
              className="button"
            >
              {isLoading ? "LOADING..." : "MORE"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Characters);
