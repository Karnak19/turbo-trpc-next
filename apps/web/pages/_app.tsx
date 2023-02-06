import { AppProps } from 'next/app';
import { trpc } from "trpc/client";

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
