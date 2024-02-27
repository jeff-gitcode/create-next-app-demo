import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./Header";
import { ThemeProvider } from "styled-components";

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
