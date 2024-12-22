import { gamePathRoot } from "./constants";

export const getFullGamePath = (gameId: string) => `${gamePathRoot}/${gameId}`;
