import * as React from "react";

/* Components */
import { Character } from "components";

function Characters({ characters }) {
  return (
    <section className="characters__container">
      <div className="characters__wrapper wrapper">
        <div className="characters__content">
          <h1 className="characters__title">My Characters</h1>

          <ul className="characters__grid">
            {characters.map((character) => {
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

export default Characters;
