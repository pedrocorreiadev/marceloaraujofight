import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Marcelo Araújo Fight | Boxe, Kickboxing e Jiu-jitsu em Rio Branco",
  description:
    "Academia Marcelo Araújo Fight em Rio Branco, Acre. Boxe, kickboxing, jiu-jitsu e Personal Fight para todos os níveis.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
