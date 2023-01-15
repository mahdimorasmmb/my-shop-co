import { SessionProvider } from "next-auth/react"
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/globals.css";
import { Layout } from "../components/layout";
import { AppProps } from "next/app";
import { Session } from "next-auth";

const queryClient = new QueryClient();



function App({
  Component,
  pageProps:{session,...pageProps}
}: AppProps<{ dehydratedState: DehydratedState,session: Session;
}>) {
  return (
    <SessionProvider session={session}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
    </SessionProvider>
  );
}

export default App;
