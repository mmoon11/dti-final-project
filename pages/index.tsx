import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/layout/Navbar";
import TransactionsDisplay from "../components/display/TransactionsDisplay";

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
        <Typography>SaveMoney</Typography>
        <Button variant="contained" endIcon={<PaymentIcon />} size="large">
          New Transaction
        </Button>

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
      </Box>
    </ThemeProvider>
  );
}
