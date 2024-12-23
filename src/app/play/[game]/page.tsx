"use client";

import { Game } from "@/type";
import { getFullGamePath } from "@/utils";
import { Button, TextField, Typography } from "@mui/material";
import { getDatabase, onValue, ref } from "firebase/database";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function WaitingControls({
  players,
  joinGame,
}: {
  players: Game["players"];
  joinGame: (name: string) => void;
}) {
  const [playerName, setPlayerName] = useState("");
  return (
    <>
      <Typography>Waiting for players</Typography>

      <TextField
        label="Your name"
        variant="outlined"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => joinGame(playerName)}
        disabled={!playerName || Object.values(players).includes(playerName)}
      >
        Join game
      </Button>

      <Typography>Players:</Typography>
      {Object.values(players).map((player) => (
        <Typography key={player}>{player}</Typography>
      ))}
    </>
  );
}

export default function Play() {
  const { game: gameId } = useParams<{ game: string }>();

  const [game, setGame] = useState<Game | null>(null);
  const [playerKey, setPlayerKey] = useState("");

  useEffect(() => {
    onValue(ref(getDatabase(), getFullGamePath(gameId)), (snapshot) => {
      if (snapshot.exists()) {
        const snapshotValue: Game = snapshot.val();

        setGame(snapshotValue);
      }
    });
  }, [gameId]);

  const joinGame = (name: string) => {
    try {
      fetch(`/api/add-player`, {
        method: "POST",
        body: JSON.stringify({ name, gameId }),
      }).then(async (response) => {
        if (response.ok) {
          setPlayerKey(await response.json().then((data) => data.playerKey));
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (!game) {
    return null;
  }

  if (game.status === "WAITING") {
    return <WaitingControls players={game.players} joinGame={joinGame} />;
  }

  console.log(playerKey);

  return (
    <>
      <Typography>Playing</Typography>
    </>
  );
}
