"use client";

import { Card } from "@/constants";
import { createContext } from "react";

export type FullData = {
  deck: Card[];
};

export type DataContextShape = {
  data: FullData;
  setData: (data: FullData) => void;
};

export const startingData: FullData = {
  deck: [],
};

export const DataContext = createContext<DataContextShape>({
  data: startingData,
  setData: () => {},
});
