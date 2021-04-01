import * as React from "react";

/* Local types */
interface Props {
  children: React.ReactNode;
}

function LayoutCharacters({ children }: Props) {
  return (
    <section className="characters__container">
      <div className="characters__wrapper wrapper">
        <div className="characters__content">{children}</div>
      </div>
    </section>
  );
}

export default LayoutCharacters;
