import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../ui/components/navbar";
import { headers } from 'next/headers';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projekt \"Smart Garden\"",
  description: "This is a project site that describes and IoT project",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode}>) {
    const headersList = headers();
    const proto = headersList.get("X-Forwarded-Proto");
    const host = headersList.get("host");
    const previewImage = `${proto}://${host}/images/sg_site_preview_en.png`;
  return (
    <html>
      <head>
        <meta name="image" property="og:image" content={previewImage}/>
        <meta property="og:image:alt" content="Project Smart Garden" />
        <meta property="og:image:type" content="image/png" />
        <meta name="publish_date" property="og:publish_date" content="2024-02-20T00:00:00+0100"/>
        <meta property="og:image:width" content="1914" />
        <meta property="og:image:height" content="959" />
        <meta name="author" content="Path Variable"/>
        <meta name="twitter:card" content="Project Website for Project Smart Garden" />
        <meta name="twitter:site" content="@isaric_pv" />
        <meta name="twitter:title" content="Project Smart Garden" />
        <meta name="twitter:description" content="Learn about our IoT project for automating agriculture" />
        <meta name="twitter:image" content={previewImage} />
        <time dateTime="2024-02-20">February 2024</time>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
