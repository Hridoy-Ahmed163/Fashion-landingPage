import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import Nav from "./components/Nav";

const inter = Poppins({ subsets: ["latin"], weight: ['900','800','400','600']  });

export const metadata: Metadata = {
  title: "Fashion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light max-w-[1400px] m-auto">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
