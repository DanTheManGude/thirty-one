export type Game = {
  players: { [key: string]: string };
  status: "WAITING" | "PLAYING" | "FINISHED";
};
