import type { Metadata } from "next";
import localFont from "next/font/local";

import { ThemeProvider } from "@mui/material/styles";

import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import theme from "./theme";
import Box from "@mui/material/Box";

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

export const metadata: Metadata = {
  title: "Online 31 Game",
  description: "Play 31 game online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <Box display="flex" justifyContent="center">
              {children}
            </Box>
          </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
