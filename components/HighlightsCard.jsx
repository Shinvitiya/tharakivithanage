import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { client, urlFor } from '@/utilities/client';
import { getDate } from '@/utilities';

const revalidate  = 10

const HighlightsCard = async({title, titleClass,containerClass, query}) => {
    const getContent = async () =>{
        const posts = await client.fetch(query)
        return posts
    }
    const content = await getContent()
  return (
    <div className="px-2 py-3 rounded-lg relative lg:flex flex-col hidden">
        <div className={`${containerClass} px-2 py-3 rounded-lg`}>
            <h3 className={`${titleClass} px-3 mobile-heading-6 md:heading-6 capitalize`}>{title}</h3>
            
            {content.map((post, index) =>(
                <Link 
                        className='flex items-center gap-x-3 rounded-md px-5 py-2 border-b border-primary-gray'
                        href={`/${post._type}/${post.slug.current}`}
                        key={index}
                    >
                        <div>
                            <p className='font-semibold'>{post.title}</p>
                            <p className='text-xs'>
                            {getDate(post._createdAt)}</p>
                        </div>

                        <Image
                        width = {400}
                        height={400}
                        src={urlFor(post.imgUrl.asset._ref).url()}
                        className='aspect-square object-cover w-[100px] rounded-lg pointer-events-none'
                        alt={post.imageAlt}
                    />
                    </Link>
            ))}
        </div>
    </div>
  )
}

export default HighlightsCard