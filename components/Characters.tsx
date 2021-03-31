import * as React from "react";

/* Components */
import { Character, Filter } from "components";

/* Hooks */
import { useAxios } from "hooks";
import ICharacter from "types/character";

/* Local Types */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface Props {
  characters: ICharacter[];
}

function Characters({ characters }: Props) {
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
          <React.Fragment>
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
          </React.Fragment>
          )
        </div>
      </div>
    </section>
  );
}

export default React.memo(Characters);
