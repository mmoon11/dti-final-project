import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/layout/Navbar";
import TransactionsDisplay from "../components/display/TransactionsDisplay";
import { signInWithGoogle } from "../util/firebase";
import { useAuth } from "../components/auth/AuthUserProvider";
import { Spinner } from "@chakra-ui/react";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#96C0B7",
      darker: "white",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Navbar />
        <Typography variant="h3" sx={{ margin: 2 }}>
          SaveMoney
        </Typography>

        {loading ? (
          <Spinner />
        ) : user ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TransactionsDisplay></TransactionsDisplay>
          </Box>
        ) : (
          <Button onClick={signInWithGoogle}>Sign In</Button>
        )}
      </Box>
    </ThemeProvider>
  );
}
