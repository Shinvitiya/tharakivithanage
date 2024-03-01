import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '@/utilities/client';
import { getContent, getDate} from '@/utilities';

const PostsCard = async ({category, firstPost, lastPost, Icon, className}) => {
    
  let posts = await getContent(category)
  posts = posts.slice(firstPost,lastPost)

  return (
    <div className={`w-full shadow-xl rounded-xl py-4 px-4 ${className}`}>
        <div className='flex items-center py-3 gap-2 text-white'>
            {Icon}
            <Link 
            className='uppercase font-semibold text-base'
            href={`/${category}`}
            >
                {category}
            </Link>
        </div>

        <div className='grid md:grid-cols-2 gap-4 py-2'>
            {posts.map((post, index) =>(
                <Link 
                    className='flex items-center gap-x-3 bg-primary-white rounded-md px-3 py-2'
                    href={`/${post._type}/${post.slug.current}`}
                    key={index}
                >
                <Image
                    width = {400}
                    height={400}
                    src={urlFor(post.imgUrl.asset._ref).url()}
                    className='aspect-square object-cover w-[100px] rounded-lg pointer-events-none'
                    alt={post.imageAlt}
                />
                    <div>

                    {}
                        <p className='font-semibold'>{post.title}</p>
                        <p className='text-xs'>
                        {getDate(post._createdAt)}</p>
                    </div>
                </Link>
            ))}
        </div>

    </div>

  )
}

export default PostsCard