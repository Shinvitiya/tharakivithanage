"use client";

import { urlFor } from '@/utilities/client';
import { getDate } from '@/utilities';

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';

const variants = {
    enter : {
        x: 1000,
        opacity: 1, 
    },
    center: {
      x: 0,
      zIndex : 1
    },
    exit : {
        x: -1000,
        zIndex: 0,
        opacity: 0,
      }
};
const Carousel = ({posts}) => {
    const [index, setIndex] = useState(0);
    const maxIndex = posts.length -1

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => {
                if (prevIndex === maxIndex) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 15000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    const latestPost = posts[index]

    const imageUrl = urlFor(latestPost.imgUrl.asset._ref).url();
  return (
    <AnimatePresence mode='popLayout'>
        <motion.div
        key={index}
        src={imageUrl}
        custom={1}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
            duration:1,
            x: { type: "spring", stiffness: 300, damping: 30 },
        }}
        >
            <Link href={`/${latestPost._type}/${latestPost.slug.current}`}>
                <div className='w-full'>
                    <Image 
                    src={imageUrl}
                    width={500}
                    height={500}
                    className='aspect-video object-cover w-full h-full pointer-events-none'
                    alt={latestPost.imageAlt}
                    />   
                </div>

                <div className='px-3 py-3'>
                    <h1 className='md:heading-1 mobile-heading-1 leading-tight uppercase'>
                        {latestPost.title}
                    </h1>

                    <div className='flex justify-between'>
                        <p  className='text-xs md:text-sm'> {getDate(latestPost._createdAt)} </p>
                        <p  className='text-xs md:text-sm uppercase text-primary-gray'> #{latestPost._type} </p>
                        
                    </div> 
                </div>
            </Link>
        </motion.div>
    </AnimatePresence>
  )
}

export default Carousel