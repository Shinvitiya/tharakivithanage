import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import HighlightsCard from "@/components/HighlightsCard"
import Footer from "@/components/Footer"

export const revalidate = 60

export default function RootLayout({children}){
  return (
        <>
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
        </>
  )
}
