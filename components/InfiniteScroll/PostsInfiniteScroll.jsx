"use client";
import React, {useEffect,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';

import { urlFor } from '@/utilities/client'
import { getDate } from '@/utilities'


let arrayIndex = 4
const PostsInfiniteScroll = ({content}) => {
    const {ref, inView} = useInView();
    const [posts, setPosts] = useState(content.slice(0,arrayIndex))
    const [loading, setLoading] = useState(true)

    useEffect( () =>{
        if(inView){
            arrayIndex = arrayIndex + 4
            setPosts(content.slice(0, arrayIndex));
            if (posts.length >= content.length){
                setLoading(false)
            }
        }
      }, [inView, content])
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
        {loading && (
        <div className='flex items-center md:justify-end justify-center w-full'>
            <div className='h-8 w-8 rounded-full border-r-primary-purple border-4  border-solid animate-spin' ref={ref}/>
        </div>
        )
        }
    </div>
  )
}

export default PostsInfiniteScroll