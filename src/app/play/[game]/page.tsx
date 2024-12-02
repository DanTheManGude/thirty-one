"use client";

import { useParams } from "next/navigation";

export default function Play() {
  const { game: gameId } = useParams<{ game: string }>();
  console.log(gameId);
  return <>Play</>;
}
