import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="dark:bg-blackBg bg-slate-100 darkT">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
