import React from 'react'

import { getContent } from '@/utilities'
import BlogSection from '@/components/BlogSection'

const page = async() => {
  return (
    <BlogSection category="technology"/>
  )
}

export default page