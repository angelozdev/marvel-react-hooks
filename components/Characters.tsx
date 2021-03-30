import * as React from "react";

/* Components */
import { Character, Filter } from "components";

/* Local Types */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function Characters({ characters }) {
  // states
  const [filterValue, setFilterValue] = React.useState<string>("");

  // helper methods
  const handleOnChange = React.useCallback((event: ChangeEvent) => {
    setFilterValue(event.target.value);
  }, []);

  const filteredCharacters = React.useMemo(() => {
    return characters.filter((character) => {
      if (!filterValue) return true;
      return character.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }, [filterValue, characters]);

  // effects
  React.useEffect(() => {
    console.log("CHARACTERS RENDER");
  });

  return (
    <section className="characters__container">
      <div className="characters__wrapper wrapper">
        <div className="characters__content">
          <h1 className="characters__title">My Characters</h1>

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
        </div>
      </div>
    </section>
  );
}

export default React.memo(Characters);
