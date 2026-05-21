import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brandSans = localFont({
  src: "./fonts/geist-sans.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 900",
});

const brandDisplay = localFont({
  src: "./fonts/geist-sans.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
});

const brandMono = localFont({
  src: "./fonts/geist-mono.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
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
