import * as React from "react";

/* Next */
import Image from "next/image";

/* LOCAL TYPES */
interface Props {
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}
function Character(props: Props) {
  const { name, description, thumbnail } = props;
  const { extension, path } = thumbnail;

  React.useEffect(() => {
    console.log("CHARACTER RENDER");
  });

  return (
    <li className="character__item transition-300">
      <div className="character__content">
        <Image
          width={300}
          height={300}
          src={`${path}.${extension}`}
          alt={`${name} cover image`}
          layout="responsive"
        />

        <div className="character__body">
          <h2 className="character__title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}

export default React.memo(Character);
