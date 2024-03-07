"use client";
import React, {useEffect,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';

import { urlFor } from '@/utilities/client'
import { getDate } from '@/utilities'


let arrayIndex = 12

const BlogSectionInfiniteScroll = ({content}) => {
    const {ref, inView} = useInView();
    const [posts, setPosts] = useState(content.slice(0,arrayIndex))
    const [loading, setLoading] = useState(true)

    useEffect( () =>{
        if(inView){
            arrayIndex = arrayIndex + 12
            setPosts(content.slice(0, arrayIndex));
            if (posts.length >= content.length){
                setLoading(false)
            }
        }
      }, [inView, content])
  return (
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
        {loading && (
        <div className='flex items-center md:justify-end justify-center w-full'>
            <div className='h-8 w-8 rounded-full border-r-primary-purple border-4  border-solid animate-spin' ref={ref}/>
        </div>
        )
        }
        

    </div>
  )
}

export default BlogSectionInfiniteScroll