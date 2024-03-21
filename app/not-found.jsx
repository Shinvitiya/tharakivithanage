"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import {useState} from 'react'
import Image from 'next/image'

export function generateMetadata (){
  return{
  title: {
    absolute: "Page not Found"
  }
  }}
const notFound = () => {
  const [isHovered, setIsHovered] = useState(false)
    return (
          <section className='flex flex-col justify-center items-center bg-black w-full min-h-screen gap-y-6 py-4'>
            <div className='text-primary-gray/40 font-bold font-league-spartan uppercase lg:text-7xl md:text-5xl text-2xl'>
              <p className=''>
                <span className='text-primary-pink'>This</span> page was not found
              </p>

              <p className=''>
                This
                <span className='text-secondary-pink'> page</span> was not found
              </p>

              <p className=''>
                This page
                <span className='text-primary-purple'> was</span> not found
              </p>

              <p className=''>
                This page was
                <span className='text-primary-white'> not</span> found
              </p>

              <p className=''>
                This page was not
                <span className='text-primary-pink'> found</span>
              </p>
            </div>
            <Link 
              href="/"
              className='flex gap-5'
              onMouseEnter={() =>setIsHovered(true)}
              onMouseLeave={() =>setIsHovered(false)}
            >
              <motion.div className='font-semibold font-league-spartan uppercase text-2xl bg-primary-pink rounded-full text-black py-2 md:py-1 px-6 flex items-center justify-center'>
                <span>Back to main page</span>
              </motion.div>
              <motion.div 
              className='bg-primary-pink rounded-full p-2 hidden lg:flex'
              initial={{rotate: -30}}
              animate={{rotate: isHovered? 0 : -30}}
              transition={{duration: 0.2, }}
              >
                <Image 
                  src="/arrow.png"
                  width={60}
                  height={60}
                  alt= "arrow"
                  className=''
                />
              </motion.div>
            </Link>
          </section>
          
    )
  }

export default notFound
  