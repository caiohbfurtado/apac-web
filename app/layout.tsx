import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const brandSans = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const brandDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const brandMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "APAC | Presenca institucional digital",
    template: "%s | APAC",
  },
  description:
    "Base institucional da APAC para acolhimento, orientacao, contribuicoes e futuras experiencias do site.",
  applicationName: "APAC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APAC",
    description:
      "Base institucional da APAC para acolhimento, orientacao, contribuicoes e futuras experiencias do site.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${brandSans.variable} ${brandDisplay.variable} ${brandMono.variable} h-full bg-canvas text-ink antialiased`}
    >
      <body className="min-h-full font-sans text-base leading-7">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
