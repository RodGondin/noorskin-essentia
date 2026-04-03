import type { Metadata } from "next";
import { Inter, Prata } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Noorskin",
  description:
    "Cosméticos naturais focados em nutrição capilar e cuidados com a pele",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${prata.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
