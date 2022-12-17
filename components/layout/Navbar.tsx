import React from "react";
import Link from "next/link";
import { useAuth } from "../auth/AuthUserProvider";
import { Box, Button } from "@mui/material";
import { signInWithGoogle } from "../../util/firebase";

type NavLink = {
  name: string;
  path: string;
};

const navData: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "New Transaction",
    path: "/newTransaction",
  },
];

const Navbar = () => {
  const { user, signOut } = useAuth();
  return (
    <header>
      <Box sx={{ display: "flex" }}>
        <nav>
          {navData
            .map(({ name, path }) => (
              <Link key={path} href={path}>
                {name}
              </Link>
            ))
            // @ts-ignore
            .reduce((left, right) => [left, " | ", right])}
        </nav>
        <Button
          onClick={user ? signOut : signInWithGoogle}
          style={{ color: "blue" }}
        >
          {user ? "Sign Out" : "Sign In"}
        </Button>
      </Box>
    </header>
  );
};

export default Navbar;
