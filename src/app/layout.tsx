import localFont from "next/font/local";

import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import "./globals.css";
import theme from "./theme";
import { DataContext, FullData, startingData } from "./DataContext";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState<FullData>(startingData);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <DataContext.Provider value={{ data, setData }}>
            <Box display="flex" justifyContent="center">
              {children}
            </Box>
          </DataContext.Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
