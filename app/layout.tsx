import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guac.site"),
  title: "$GUAC",
  description: "Launch, Mint , and Grow on KRC20",
  openGraph: {
    title: "$GUAC",
    description: "Launch, Mint , and Grow on KRC20",
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
    description: "Launch, Mint , and Grow on KRC20",
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
