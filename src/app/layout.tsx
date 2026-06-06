import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1 Grate Shirt | A Dumb Shirt With a Dream",
  description:
    "1 Grate Shirt is a one-product joke brand built from a misunderstood quote, a cheese grater pun, and a dream to sell one million shirts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}