import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./fonts.css";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Vijay Logistics — Logistics Made Simple",
    template: "%s | Vijay Logistics",
  },
  description:
    "Vijay Logistics connects businesses across India with surface transportation, warehousing, automotive distribution and hub-and-spoke logistics. Logistics Made Simple.",
  icons: { icon: "/assets/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#073b48" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
