import * as React from "react";

/* LOCAL TYPES */
interface Props {
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}
function Character({
  name,
  description,
  thumbnail: { extension, path },
}: Props) {
  return (
    <li className="character__item">
      <div className="character__content">
        <figure>
          <img src={`${path}.${extension}`} alt={`${name} image`} />
        </figure>

        <div className="character__body">
          <h2 className="character__title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}

export default Character;
