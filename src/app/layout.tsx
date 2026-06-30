import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "arzan@portfolio — PortfolioOS",
  description:
    "An immersive command-line operating system portfolio. Explore Arzan's projects, skills, and experience through a real Linux-style shell.",
  keywords: [
    "Arzan",
    "Portfolio",
    "Terminal",
    "CLI",
    "Linux",
    "Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Arzan S. S." }],
  icons: {
  },
  openGraph: {
    title: "arzan@portfolio — PortfolioOS",
    description:
      "Explore Arzan's portfolio through a futuristic Linux terminal. Type `help` to begin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrains.variable} font-mono antialiased bg-term-bg text-term-fg`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
