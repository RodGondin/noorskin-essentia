import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
