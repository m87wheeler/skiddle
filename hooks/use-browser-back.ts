import * as React from "react";
import router from "next/router";

export const useBrowserBack = (callback: Function) => {
  React.useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        callback();
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [callback]);
};
