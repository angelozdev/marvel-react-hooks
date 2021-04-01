import * as React from "react";
import { initialState } from ".";
import { Context } from "./types";

export const charactersContext = React.createContext<Context>([initialState]);

export default charactersContext;
