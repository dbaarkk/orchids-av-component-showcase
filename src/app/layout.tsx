import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaryaveersharma.in"),
  title: "Aaryaveer Sharma | Portfolio",
  description: "Personal portfolio of Aaryaveer Sharma, showcasing high-end web development and digital solutions.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aaryaveer Sharma | Portfolio",
    description: "Personal portfolio of Aaryaveer Sharma, showcasing high-end web development and digital solutions.",
    url: "https://aaryaveersharma.in",
    siteName: "Aaryaveer Sharma",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Aaryaveer Sharma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaryaveer Sharma | Portfolio",
    description: "Personal portfolio of Aaryaveer Sharma, showcasing high-end web development and digital solutions.",
    images: ["/hero-bg.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload hero background image so it's ready before first paint */}
        <link
          rel="preload"
          as="image"
          href="/hero-bg.jpg"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
