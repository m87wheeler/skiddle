import * as React from "react";

const STORAGE_KEY = "skiddle_user_page";

export const usePage = (max: number, min = 0) => {
  const [page, setPage] = React.useState(0);

  const handleSetPage = React.useCallback(
    (i: number) => () => {
      setPage((n) => {
        if (n + i < min) return n;
        if (n + i > max) return n;
        sessionStorage.setItem(STORAGE_KEY, `${n + i}`);
        return n + i;
      });
    },
    [min, max]
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const prevPage = sessionStorage.getItem(STORAGE_KEY);
    if (!Number(prevPage)) return;

    setPage(Number(prevPage));
  }, [page]);

  return { page, setPage: handleSetPage };
};
