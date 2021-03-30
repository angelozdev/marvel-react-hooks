import * as React from "react";

/* Components */
import { Character, Filter } from "components";

/* Hooks */
import { useAxios } from "hooks";

/* Local Types */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function Characters() {
  // states
  const { data, status } = useAxios({ url: "characters" });
  const [filterValue, setFilterValue] = React.useState<string>("");
  const results = data?.results || [];

  // helper methods
  const handleOnChange = React.useCallback((event: ChangeEvent) => {
    setFilterValue(event.target.value);
  }, []);

  const filteredCharacters = React.useMemo(() => {
    return results.filter((character) => {
      if (!filterValue) return true;
      return character.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }, [filterValue, results]);

  // effects
  React.useEffect(() => {
    console.log("CHARACTERS RENDER");
  });

  return (
    <section className="characters__container">
      <div className="characters__wrapper wrapper">
        <div className="characters__content">
          {status === "LOADING" || !data ? (
            <span>Loading...</span>
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Characters);
