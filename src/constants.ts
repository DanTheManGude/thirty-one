export const suites = ["SPADES", "CLUBS", "HEARTS", "DIAMONDS"] as const;
export const ranks = [
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
  "SIX",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
  "JACK",
  "QUEEN",
  "KING",
  "ACE",
] as const;

export type Card = {
  suite: (typeof suites)[number];
  rank: (typeof ranks)[number];
};
