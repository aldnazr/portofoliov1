import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alauddin Azhar — Portofolio",
  description:
    "Portfolio M. Alauddin Azhary, frontend developer yang merancang pengalaman digital yang berguna untuk user.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
