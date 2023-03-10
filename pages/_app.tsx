import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { LayoutProps } from "@vercel/examples-ui/layout";

import { getLayout } from "@vercel/examples-ui";

import "@vercel/examples-ui/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black min-h-screen h-fit overflow-auto scrollbar-hide">
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default App;
