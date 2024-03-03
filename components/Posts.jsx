import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { client, urlFor } from '@/utilities/client';
import { getDate, sideBarTabs } from '@/utilities';

const createQuery = ()=>{
    const tabs = sideBarTabs
    .filter(tab => tab.tabName !== "trending")
    .map(tab => tab.tabName);

    const query = tabs.map(tabName => `...*[_type == "${tabName}" ] | order(_createdAt desc)[5..-1]`).join(', ')
    return query
}

const getContent = async () =>{
    // Gets posts from each category newest first without the first x number of posts and concatenates them into and reorders this newly concatenated array newest first

    // Returns something like this while dynamically creating a query for each tab section you add
    
    // `[...*[_type == "technology" ] | order(_createdAt desc)[5..-1], ...*[_type == "science" ] | order(_createdAt desc)[5..-1], ...*[_type == "entertainment" ]| order(_createdAt desc)[5..-1]] | order(_createdAt desc)`;

    const query = `[${createQuery()}] | order(_createdAt desc)` 
    const posts = await client.fetch(query)
    return posts
}

const Posts = async () => {
    createQuery()
  let posts = await getContent()

  return (
    <div className='grid sm:grid-cols-2 gap-4'>
        {posts.map((post, index)=>(
            <Link 
                href={`/${post._type}/${post.slug.current}`}
                className='overflow-hidden rounded-lg shadow-lg bg-primary-white'
                key={index}
                >
                <div className='w-full'>
                    <Image 
                        src={urlFor(post.imgUrl.asset._ref).url()}
                        width={400}
                        height={400}
                        className='aspect-video object-cover w-full h-full pointer-events-none'
                        alt={post.imageAlt}
                    />
                </div>

                <div className='px-3 py-3'>
                    <p className='font-league-spartan font-semibold md:text-lg text-base uppercase'>
                        {post.title}
                    </p>

                    <div className='flex justify-between'>
                        <p  className='text-xs md:text-sm'> {getDate(post._createdAt)} </p>
                        <p  className='text-xs md:text-sm uppercase text-primary-gray' > #{post._type} </p>
                    </div>
                    
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Posts