import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '@/utilities/client';
import { getContent, getDate, sideBarTabs } from '@/utilities';

const createQuery = ()=>{
    const tabs = sideBarTabs
    .filter(tab => tab.tabName !== "trending")
    .map(tab => tab.tabName);

    const query = tabs.map(tabName => `...*[_type == "${tabName}" ] | order(_createdAt desc)[0]`).join(', ')
    return query
}

const Banner = async () => {
    const posts = await getContent("entertainment")
    const latestPost = posts[0]
    const imageUrl = urlFor(latestPost.imgUrl.asset._ref).url();

  return (
    <div className='w-full bg-primary-white shadow-2xl rounded-xl overflow-hidden'>
        <Link href={`/entertainment/${latestPost.slug.current}`}>
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
    </div>
  )
}

export default Banner