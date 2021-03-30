import * as React from "react";

/* Components */
import { Character } from "components";

function Characters({ characters }) {
  const [filterValue, setFilterValue] = React.useState<string>("");

  const filteredCharacters = React.useMemo(() => {
    return characters.filter((character) => {
      if (!filterValue) return true;
      return character.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }, [filterValue, characters]);

  React.useEffect(() => {
    console.log("CHARACTERS RENDER");
  });

  return (
    <section className="characters__container">
      <div className="characters__wrapper wrapper">
        <div className="characters__content">
          <h1 className="characters__title">My Characters</h1>

          <input
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
            type="text"
            placeholder="filter by name"
          />

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
