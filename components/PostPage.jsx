import React from 'react'
import { getDate } from '@/utilities'
import { urlFor } from '@/utilities/client'

export const revalidate = 10

const PostPage = ({post}) => {
  return (
    <React.Fragment>
        <div className='bg-primary-white col-span-3 mt-5 lg:pl-8 rounded-md space-y-5'>
        
        <div className='bg-primary-white shadow-lg rounded-xl p-3 space-y-8'>
            <div className='w-full p-1 sm:p-3 space-y-2'>
            <h1 className='md:heading-1 mobile-heading-1 leading-none'>{post.title}</h1>
            
            <div  className='flex items-center justify-between'>
                <p className='text-xs md:text-sm uppercase font-semibold'>{getDate(post._createdAt)}</p>
            </div>
            <br />

            </div>

            <div className='w-full'>
            <img 
                src={urlFor(post.imgUrl.asset._ref).url()}
                className='aspect-video object-cover w-full h-full rounded-lg pointer-events-none'
                alt={post.imageAlt}
            />
            </div>

            <div className='space-y-4 mb-3'>
            {post.description.map((para, index)=>(
                <p className='text-primary-gray md:text-lg text-base' key={index}>{para}</p>
            ))}
            </div>
        </div>

        {/* <PostsCard 
            type="anime"
        />
        <PostsCard 
            type="manga"
        /> */}
        </div>
    </React.Fragment>
  )
}

export default PostPage