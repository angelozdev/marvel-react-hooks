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
  urls: {
    type: string;
    url: string;
  }[];
}
function Character(props: Props) {
  const { name, description, thumbnail, urls } = props;
  const { extension, path } = thumbnail;

  React.useEffect(() => {
    console.log("CHARACTER RENDER");
  });

  return (
    <li className="character__item transition-300">
      <div className="character__content">
        <figure>
          <Image
            className="character__image"
            width={200}
            height={200}
            src={`${path}.${extension}`}
            alt={`${name} cover image`}
            layout="responsive"
          />
        </figure>

        <div className="character__body">
          <h2 className="character__title">{name}</h2>

          <ul className="character__url_list">
            {React.Children.toArray(
              urls.map(({ type, url }) => (
                <li className="character__url_item">
                  <a target="_blank" href={url}>
                    <small>{type}</small>
                  </a>
                </li>
              ))
            )}
          </ul>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}

export default React.memo(Character);
