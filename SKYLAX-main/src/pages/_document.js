import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html
      lang="en"
      className={`dark !bg-sc-dark`}
    >
      <Head />
      <body className="antialiased" style={{ margin: "0px!important" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
