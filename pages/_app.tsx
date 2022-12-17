import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthUserProvider from "../components/auth/AuthUserProvider";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ChakraProvider>
  );
}

export default App;
