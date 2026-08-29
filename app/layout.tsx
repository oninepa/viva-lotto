import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boule d'Or — Les loteries françaises expliquées simplement",
  description:
    "Numéros gagnants, analyses et guides des loteries françaises pour les résidents étrangers en France.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-body min-h-screen">{children}</body>
    </html>
  );
}
