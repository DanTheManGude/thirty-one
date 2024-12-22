"use client";

import { useAuth } from "@/context/AuthContext";
import { Button, Stack, Typography } from "@mui/material";
import { User } from "firebase/auth";
import { child, getDatabase, push, ref, update } from "firebase/database";
import { useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { gamePathRoot } from "@/constants";
import { getFullGamePath } from "@/utils";
import { Game } from "@/type";

const gameTemplate: Game = { players: { "1": "Danny G" }, status: "WAITING" };

function NewGameControls({ user }: { user?: User }) {
  const [gameId, setGameId] = useState<string | null>(null);

  if (!user) {
    return null;
  }

  const handleCreateGame = async () => {
    const key = push(child(ref(getDatabase()), gamePathRoot)).key;

    if (!key) {
      return;
    }

    await update(ref(getDatabase()), {
      [getFullGamePath(key)]: gameTemplate,
    });

    setGameId(key);
  };

  return (
    <Stack spacing={2}>
      <Typography textAlign={"center"}>New Game</Typography>
      <Button
        onClick={handleCreateGame}
        disabled={Boolean(gameId)}
        variant="outlined"
      >
        <Typography>Create</Typography>
      </Button>
      <Button disabled={!gameId} variant="outlined">
        <Typography textAlign={"center"}>Start game</Typography>
      </Button>
      {gameId && <Typography>{gameId}</Typography>}
      {gameId && (
        <Button
          color="primary"
          variant="contained"
          endIcon={<ContentCopyRoundedIcon />}
          onClick={() => {
            navigator.clipboard.writeText(
              `https://31.dangude.com/play/${gameId}`
            );
          }}
        >
          <Typography>Copy</Typography>
        </Button>
      )}
    </Stack>
  );
}

export default function Page() {
  const { user, logOut = async () => {}, logIn = async () => {} } = useAuth();
  const isLoggedIn = Boolean(user) && Boolean(logOut);

  return (
    <>
      <Stack alignItems={"center"} spacing={2}>
        <Typography>31 Game</Typography>
        <Button
          variant="outlined"
          color="secondary"
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
