import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const singleDay = localFont({
  src: [
    {
      path: "../../public/fonts/SingleDay-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-single-day",
  display: "swap",
  fallback: ["cursive", "sans-serif"],
});

const spicySoup = localFont({
  src: [
    {
      path: "../../public/fonts/SpicySoup.ttf",
      weight: "400",
    },
  ],
  variable: "--font-spicy-soup",
  display: "swap",
  fallback: ["cursive", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Keeone Hoon | The Ultimate Memecoin",
  description:
    "Keeone Hoon is the ultimate memecoin inspired by the legendary founder of Monad. Join the revolution and be part of the most exciting memecoin in the blockchain space!",
  keywords: [
    "Keeone Hoon",
    "memecoin",
    "cryptocurrency",
    "Monad",
    "blockchain",
    "crypto",
    "ETH",
  ],
  authors: [{ name: "Keeone Hoon Team" }],
  openGraph: {
    title: "Keeone Hoon | The Ultimate Memecoin",
    description:
      "Join the revolution and be part of the most exciting memecoin in the blockchain space!",
    type: "website",
    locale: "en_US",
    siteName: "Keeone Hoon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keeone Hoon | The Ultimate Memecoin",
    description:
      "Join the revolution and be part of the most exciting memecoin in the blockchain space!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Single+Day&display=swap" rel="stylesheet" />
      </head>
      <body className={`${singleDay.variable} ${spicySoup.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
