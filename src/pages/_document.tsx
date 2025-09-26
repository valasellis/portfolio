import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" type="image/x-icon" href="/favicon-dv.png"></link>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
