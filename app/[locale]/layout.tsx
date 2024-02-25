import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../ui/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projekt \"Smart Garden\"",
  description: "This is a project site that describes and IoT project",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode}>) {
  return (
    <html>
      <head>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
