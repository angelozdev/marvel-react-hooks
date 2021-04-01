import * as React from "react";

import { context, initialState } from "./";

/* Local types */
interface Props {
  children: React.ReactNode;
}

function Provider({ children }: Props) {
  const [characters, setCharacters] = React.useState(initialState);

  return (
    <context.Provider value={[characters, setCharacters]}>
      {children}
    </context.Provider>
  );
}

export default Provider;
