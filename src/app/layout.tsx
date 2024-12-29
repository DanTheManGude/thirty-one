import type { Metadata } from "next";
import localFont from "next/font/local";

import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import "./globals.css";
import theme from "./theme";

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
  title: "31 Game Strategy",
  description: "Provide strategy for 31 game in real time",
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
          <Box display="flex" justifyContent="center">
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
