import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0f18",
};

export const metadata: Metadata = {
  title: "Vidly — Live translated subtitles for Chrome",
  description:
    "Vidly translates live audio subtitles for the Chrome tab you are watching. Built for lectures, streams, and movies.",
  openGraph: {
    title: "Vidly — Live translated subtitles for Chrome",
    description:
      "Live captions translated in your tab — for lectures, streams, and films.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
