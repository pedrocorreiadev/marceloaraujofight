import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marceloaraujofight.vercel.app"),
  title: "Marcelo Araújo Fight | Boxe, Kickboxing e Jiu-jitsu em Rio Branco",
  description:
    "Academia de boxe, kickboxing e jiu-jitsu em Rio Branco - Acre. Treinos para iniciantes e avançados com acompanhamento profissional.",
  openGraph: {
    title: "Marcelo Araújo Fight | Boxe, Kickboxing e Jiu-jitsu em Rio Branco",
    description:
      "Academia de boxe, kickboxing e jiu-jitsu em Rio Branco - Acre. Treinos para iniciantes e avançados com acompanhamento profissional.",
    url: "/",
    siteName: "Marcelo Araújo Fight",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/media/photos/turma-equipe-kickboxing.webp",
        width: 1280,
        height: 960,
        alt: "Turma da Marcelo Araújo Fight reunida dentro da academia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo Araújo Fight | Boxe, Kickboxing e Jiu-jitsu em Rio Branco",
    description:
      "Academia de boxe, kickboxing e jiu-jitsu em Rio Branco - Acre. Treinos para iniciantes e avançados com acompanhamento profissional.",
    images: ["/media/photos/turma-equipe-kickboxing.webp"],
  },
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
