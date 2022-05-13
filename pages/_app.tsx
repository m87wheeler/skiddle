import * as React from "react";
import router from "next/router";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Reset } from "../styles/reset";
import { StyleContextProvider } from "../context/style-context";
import PageTransition from "../components/ui/page-transition/page-transition";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StyleContextProvider>
        <Hydrate state={pageProps?.dehydratedState}>
          <Reset />
          <ReactQueryDevtools />
          {loading ? <PageTransition /> : <Component {...pageProps} />}
        </Hydrate>
      </StyleContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
