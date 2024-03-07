import { Mulish } from "next/font/google";
import "../styles/globals.css";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import HighlightsCard from "@/components/HighlightsCard";

const mulish = Mulish({weight: ["200","300","400","500","700","800", "900", "1000"], subsets: ["latin"]})

export const metadata = {
  metadataBase: new URL('https://www.tharakivithanage.com'),
  title: { 
    default: "Blog",
    template: "%s | Blog"
  },
  description: "Lorem Ipsum",
  openGraph: {
    title: "Blog",
    description: "Lorem Ipsum",
    images: "/opengraph-image.png",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
          {children}
      </body>
    </html>
  );
}
