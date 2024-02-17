import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Quiz</title>
        <meta property="og:title" content="Quiz" key="title" />
      </Head>
      <body className="bg-violet-main">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
