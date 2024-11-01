import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$GUAC",
  description: "Tastiest KRC20 Token on the planet",
  openGraph: {
    title: "$GUAC",
    description: "Tastiest KRC20 Token on the planet",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$GUAC",
    description: "Tastiest KRC20 Token on the planet",
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
