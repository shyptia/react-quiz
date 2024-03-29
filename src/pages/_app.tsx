import { Layout } from "@/Layout";
import "@/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta property="og:title" content="Quiz" key="title" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
