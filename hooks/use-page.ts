import * as React from "react";
import { StorageKeys } from "../types";

export const usePage = (max: number, min = 0) => {
  const [page, setPage] = React.useState(0);

  const handleSetPage = React.useCallback(
    (i: number) => () => {
      setPage((n) => {
        if (n + i < min) return n;
        if (n + i > max) return n;
        sessionStorage.setItem(StorageKeys.page, `${n + i}`);
        return n + i;
      });
    },
    [min, max]
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const prevPage = sessionStorage.getItem(StorageKeys.page);
    if (!Number(prevPage)) return;

    setPage(Number(prevPage));
  }, [page]);

  return { page, setPage: handleSetPage };
};
