"use client";

import { useAuth } from "@/context/AuthContext";
import { Button, Stack, Typography } from "@mui/material";
import { User } from "firebase/auth";
import { child, getDatabase, push, ref, update } from "firebase/database";
import { useState } from "react";

const gamePath = "games";
const gameTemplate = { players: ["Danny G"] };

function NewGameControls({ user }: { user?: User }) {
  const [gameId, setGameId] = useState<string | null>(null);

  if (!user) {
    return null;
  }

  const handleCreateGame = async () => {
    const key = push(child(ref(getDatabase()), gamePath)).key;

    await update(ref(getDatabase()), {
      [`${gamePath}/${key}`]: gameTemplate,
    });

    setGameId(key);
  };

  return (
    <Stack>
      <Typography textAlign={"center"}>New Game</Typography>
      <Button onClick={handleCreateGame} disabled={Boolean(gameId)}>
        <Typography>Create</Typography>
      </Button>
      <Button disabled={!gameId}>
        <Typography textAlign={"center"}>Start game</Typography>
      </Button>
      <Typography>{gameId}</Typography>
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
