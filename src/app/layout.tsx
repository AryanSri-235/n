import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manas Srivastava | Head of Growth & Performance",
  description:
    "Growth campaigns built to compound revenue. High-velocity acquisition systems, multi-angle paid funnels, and personal inbound engines.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Growth Marketing",
    "Performance Marketing",
    "GTM Strategy",
    "LinkedIn Inbound",
    "Meta Ads",
    "Manas Srivastava",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface-canvas text-text-primary antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
