import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { client, urlFor } from '@/utilities/client';
import { getDate } from '@/utilities';

const getContent = async () =>{
    const query = `*[_type in ["technology", "entertainment"]] | order(_createdAt desc)`;
    const posts = await client.fetch(query)
    return posts
}

const Posts = async ({start, end}) => {
  let posts = await getContent()
  posts = posts.slice(start, end)
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
                        <p  className='text-xs md:text-sm uppercase text-primary-gray'> #{post._type} </p>
                    </div>
                    
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Posts