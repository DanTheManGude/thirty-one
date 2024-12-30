"use client";

import { Card } from "@/constants";
import { createContext, Dispatch, SetStateAction } from "react";

export type FullData = {
  deck: Card[];
};

export type DataContextShape = {
  data: FullData;
  setData: Dispatch<SetStateAction<FullData>>;
};

export const startingData: FullData = {
  deck: [],
};

export const DataContext = createContext<DataContextShape>({
  data: startingData,
  setData: () => {},
});
