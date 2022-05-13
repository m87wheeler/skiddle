import * as React from "react";
import { VariantType } from "../types";

type InitialStateType = {
  headerColor: VariantType;
  setHeaderColor: (color: VariantType) => void;
};

const initialState: InitialStateType = {
  headerColor: "white",
  setHeaderColor: (headerColor) => {},
};

export const StyleContext = React.createContext(initialState);

export const StyleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [headerColor, setHeaderColor] = React.useState("white" as VariantType);

  return (
    <StyleContext.Provider value={{ headerColor, setHeaderColor }}>
      {children}
    </StyleContext.Provider>
  );
};
