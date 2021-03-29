import * as React from "react";

/* Components */
import { Character } from "components";

function Characters({ characters }) {
  return (
    <section className="characters__container">
      <div className="characters__wrapper">
        <div className="characters__content">
          <h1>My Characters</h1>

          <ul className="characters__grid">
            {characters.map((character) => {
              const { name, description, id, thumbnail } = character;

              if (description) {
                return (
                  <Character
                    key={id}
                    thumbnail={thumbnail}
                    name={name}
                    description={description}
                  />
                );
              }
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Characters;
