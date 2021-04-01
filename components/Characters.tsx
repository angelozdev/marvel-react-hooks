import * as React from "react";

/* Components */
import { Character } from "components";
import { charactersContext } from "context";

function Characters() {
  const [{ filtered }] = React.useContext(charactersContext);

  // effects
  React.useEffect(() => {
    console.log("CHARACTERS RENDER");
  });

  return (
    <React.Fragment>
      {filtered.length ? (
        <ul className="characters__grid">
          {filtered.map((character) => {
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
      ) : (
        <p>There are no characters </p>
      )}
    </React.Fragment>
  );
}

export default React.memo(Characters);
