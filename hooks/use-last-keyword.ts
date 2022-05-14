import * as React from "react";
import { StorageKeys } from "../types";

export const useLastKeyword = () => {
  const [lastKeyword, setLastKeyword] = React.useState("");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const prevSearch = sessionStorage.getItem(StorageKeys.search);
    if (prevSearch) setLastKeyword(prevSearch);
  }, []);

  return lastKeyword;
};
