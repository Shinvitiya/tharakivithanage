import { Mulish } from "next/font/google";
import "../styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";


const mulish = Mulish({weight: ["200","300","400","500","700","800", "900", "1000"], subsets: ["latin"]})

export const metadata = {
  metadataBase: new URL('https://www.tharakivithanage.com'),
  title: { 
    default: "Blog",
    template: "%s | Viral Newsshare"
  },
  description: "Lorem Ipsum",
  openGraph: {
    title: "Viral Newsshare",
    description: "Lorem Ipsum",
    images: "/opengraph.png",
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
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID}/>
      <body className={mulish.className}>
          {children}
          <CookieBanner />
      </body>
    </html>
  );
}
