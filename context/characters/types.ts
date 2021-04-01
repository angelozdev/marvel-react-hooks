import * as React from "react";
import ICharacter from "types/character";

export enum ActionTypes {
  ADD_CHARACTERS = "ADD_CHARACTERS",
}

export interface InitialState {
  all: ICharacter[];
  filtered: ICharacter[];
}

export type Context = [
  InitialState,
  React.Dispatch<React.SetStateAction<InitialState>>?
];
