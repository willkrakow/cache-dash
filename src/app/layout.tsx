import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, Drawer, Grid, List, ListItemButton } from '@mui/material'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Drawer open anchor="left" variant="permanent">
          <List>
            <ListItemButton>Home</ListItemButton>
            <ListItemButton>Data</ListItemButton>
            <ListItemButton>Settings</ListItemButton>
          </List>
        </Drawer>
        <Box p={2}>
          {children}
          </Box>
      </body>
    </html>
  );
}
