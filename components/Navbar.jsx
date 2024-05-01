"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {HiMenuAlt3} from "react-icons/hi";


import { sideBarTabs } from '../utilities';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
    {/* Mobile Navigation Bar */}
    <nav className='w-full relative bg-primary-purple/30 text-primary-gray shadow-md z-5 lg:hidden flex flex-col items-center justify-center'>
      <div className='w-full flex'>
        <div className='flex items-center m-3 gap-3'>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={50}
              height={50}
              alt="logo"
              priority
              className='rounded-full pointer-events-none'
            />
          </Link>
          
        </div>

        <div className='flex-grow'/>
        <div 
          className='text-[40px] mr-2 cursor-pointer opacity-80 pt-4'
          onClick={()=>{setMenu((prev)=> !prev)}}
          >
          <HiMenuAlt3 />
        </div>
      </div>

      {menu?

      (<>
      <div className='w-full grid grid-cols-2 gap-3 py-3'>
          {sideBarTabs.map((tab) =>(
            <Link 
              className='flex items-center uppercase font-poppins pl-6 rounded-md shadow-sm text-sm bg-secondary-white gap-2' 
              href={tab.link}
              key={tab.tabName}
              onClick={()=>setMenu(false)}
            >
              {tab.icon} 
              {tab.tabName}
            </Link>
          ))}
      </div>
        </>
      )
      :(""
      )}
   
    </nav>
    </>
  )
}

export default Navbar