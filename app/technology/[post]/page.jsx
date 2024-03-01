import React from 'react'

import PostPage from '@/components/PostPage';
import { getPost } from '@/utilities';


const page = async({params}) => {
  const post = await getPost("technology",params.post)
  return (
      <PostPage post={post}/>
  )
}

export default page