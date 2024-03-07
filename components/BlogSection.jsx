import React from 'react'

import { getContent } from '@/utilities'
import BlogSectionInfiniteScroll from './InfiniteScroll/BlogSectionInfiniteScroll'

const BlogSection = async({category}) => {
    const posts = await getContent(category)
    return (
        <div className='w-full lg:col-span-3 col-span-5 px-2'>
        <h1 className='md:heading-1 mobile-heading-1 font-bold uppercase px-2 py-3'>{category}</h1>
            <BlogSectionInfiniteScroll content={posts}/>
        </div>
      )
}

export default BlogSection