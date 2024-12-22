"use client";

import { useAuth } from "@/context/AuthContext";
import { Button, Stack, Typography } from "@mui/material";
import { User } from "firebase/auth";

function NewGameControls({ user }: { user?: User }) {
  if (!user) {
    return null;
  }

  return (
    <Stack>
      <Typography>New Game</Typography>
      <Button>
        <Typography>Create</Typography>
      </Button>
    </Stack>
  );
}

export default function Page() {
  const { user, logOut = async () => {}, logIn = async () => {} } = useAuth();
  const isLoggedIn = Boolean(user) && Boolean(logOut);

  return (
    <>
      <Stack alignItems={"center"}>
        <Typography>31 Game</Typography>
        <Button
          onClick={(e) => {
            e.preventDefault();
            try {
              if (isLoggedIn) {
                logOut();
              } else {
                logIn();
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Typography>{isLoggedIn ? "Logout" : "Login"}</Typography>
        </Button>
        <NewGameControls user={user} />
      </Stack>
    </>
  );
}
