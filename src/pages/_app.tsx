import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const layoutdontNeeded = ["/"].includes(appProps?.router?.pathname);

  const LayoutWrapper = layoutdontNeeded ? React.Fragment : Layout;

  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}
