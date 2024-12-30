"use client";

import { Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function Page() {
  const { data } = useContext(DataContext);

  return (
    <>
      <Typography>31 Strategy</Typography>
      <Typography>{JSON.stringify(data)}</Typography>
    </>
  );
}
