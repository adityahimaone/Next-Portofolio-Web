import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`dark bg-background-ext-1000 dark:bg-background-ext-50 dark:text-white ${inter.className}`}
      >
        <header>
          <Navbar />
        </header>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
