import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Song of the Going Merry",
  description: "A gentle tribute to the Going Merry and the Straw Hats."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
