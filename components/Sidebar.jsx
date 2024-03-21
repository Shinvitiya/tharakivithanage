"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { sideBarTabs, extractPathName } from '@/utilities';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className='h-screen bg-primary-purple/30 shadow-lg lg:flex flex-col items-center justify-start gap-10 relative hidden'>

        <div className='mt-5 lg:flex hidden w-full px-2 items-center justify-center'>
          <Link href="/">
            <Image 
              src="/logo.png"
              height={100}
              width={100}
              alt='logo'
              priority
              className='pointer-events-none w-32'
            />
          </Link>
          
        </div>
        <div className='w-full gap-2 flex flex-col px-2'>
          {sideBarTabs.map((tab) =>{

            return (
            <Link 
              className={`gap-2 px-2 py-3 flex items-center shadow-sm text-base uppercase text-primary-gray w-full rounded-md ${extractPathName(pathname) == tab.link? "bg-primary-pink text-primary-white": "hover:bg-primary-pink/30 hover:text-black"}`}
              key={tab.tabName}
              href={tab.link}
              >
                {tab.icon}{tab.tabName}
            </Link>
          )})}
        </div>
        
    </div>
    
  )
}

export default Sidebar