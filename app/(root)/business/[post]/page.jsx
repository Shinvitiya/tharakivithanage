import React from 'react'

import PostPage from '@/components/PostPage';
import { getPost } from '@/utilities';
import { urlFor } from '@/utilities/client';

export async function generateMetadata({ params}) {  
  const post = await getPost("business", params.post)
  const url = urlFor(post.imgUrl.asset._ref).url()
  return {
    title: {absolute: post.title},
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [url],
    },
  }
}

const page = async({params}) => {
  const post = await getPost("business",params.post)

  return (
      <PostPage post={post}/>
  )
}

export default page