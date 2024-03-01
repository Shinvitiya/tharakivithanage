import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { urlFor } from '@/utilities/client'
import { getDate, getContent } from '@/utilities'

const BlogSection = async({category}) => {
    const posts = await getContent(category)
    return (
        <div className='w-full lg:col-span-3 col-span-5 px-2'>
        <h1 className='md:heading-1 mobile-heading-1 font-bold uppercase px-2 py-3'>{category}</h1>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mx-3 py-2 mt-3' >
            {posts.map((post, index)=>(
                <Link 
                    className='overflow-hidden rounded-xl shadow-lg h-fit'
                    href= {`/${post._type}/${post.slug.current}`}
                    key = {index}
                >
                    <Image 
                        src={urlFor(post.imgUrl.asset._ref).url()}
                        width={800}
                        height={800}
                        className='aspect-video object-cover pointer-events-none'
                        alt={post.imageAlt}
                    />
                    <div className='flex flex-col p-2 gap-2'>
                        <h3 className='font-semibold md:text-sm text-xs uppercase'>{post.title}</h3>
                        <p  className='text-[10px] md:text-xs'> {getDate(post._createdAt)} </p>
                    </div>
    
                </Link>
                
            ))}
    
        </div>
        </div>
      )
}

export default BlogSection