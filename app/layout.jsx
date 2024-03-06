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
          <Navbar />
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-x-5 bg-primary-white min-h-screen">
            <div>
              <div className="fixed left-0 top-0 h-screen w-1/6">
                <Sidebar />
              </div>
            </div>
            
            {children}
            <div className='lg:col-span-2 col-span-5 mt-5 space-y-8 lg:pr-8 px-5 rounded-md'>
               <HighlightsCard 
                title="Popular"
                titleClass="text-secondary-pink"
                containerClass="bg-primary-purple"
                query={`*[_type in ["technology", "entertainment", "science"] && defined(views)] | order(_createdAt desc) |order(views desc)[0...4]`}
              />
              <HighlightsCard 
                title="Most Viewed"
                titleClass="text-secondary-pink"
                containerClass="bg-primary-pink"
                query={`*[_type in ["technology", "entertainment", "science"] && defined(views)] | order(views desc)[0...4]`}
              />

            </div>

            <Footer />
          </div>
      </body>
    </html>
  );
}
