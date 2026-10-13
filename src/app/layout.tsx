import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LivvGuard - The Smarter Way to Manage Security Operations",
  description:
    "Assign duty hours, collect guard task reports and review everything from one dashboard. LivvGuard brings automation and real-time visibility to security operations.",
  icons: { icon: "/images/shield.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CursorGlow />
      </body>
    </html>
  );
}
