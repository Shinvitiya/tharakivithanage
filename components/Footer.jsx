import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { sideBarTabs } from '@/utilities'

const Footer = () => {
  return (
    <footer className='lg:col-start-2 col-span-5 w-full bg-primary-white inset-0 flex md:flex-row flex-col  justify-between p-4 mt-5 bottom-0 shadow-inner gap-12'>
      <div className='w-full flex flex-col text-xs space-x-4'>
        <Image 
            src="/logo.svg"
            width={200}
            height={300}
          />
        <div className='space-x-8'>
        <Link href="/privacy-policy" >Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>

      <div className='w-full flex flex-col justify-end'>
        <p className='text-xl font-semibold font-league-spartan'>Stay informed with Viral Newsshare</p>
        <p>Your ultimate destination for the latest breaking news, trending topics, and insightful stories.</p>
      </div>

      <div className='flex flex-col w-full space-y-1 justify-end'>
        {sideBarTabs.map((tab, index) =>(
          <Link 
            href={tab.link} 
            key={index}
            className='text-xl text-primary-gray hover:text-black capitalize font-league-spartan font-semibold'
          >
              {tab.tabName}
            </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer