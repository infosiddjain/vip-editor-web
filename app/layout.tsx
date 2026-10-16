import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const viewport: Viewport = { themeColor: "#3A0D2C" };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: { default: "VIP Editor — Photo, Video & Audio Editing", template: "%s | VIP Editor" },
  description: "Edit photos, videos and audio in one elegant app. Crop, trim, filter and save straight to your gallery.",
  openGraph: { siteName: "VIP Editor", type: "website" },
  authors: [{ name: "Siddharth Jain", url: "https://portfolio-five-brown-mafnjkhjpf.vercel.app/" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
