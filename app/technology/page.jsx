import React from 'react'

import { getContent } from '@/utilities'
import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Technology"
}

const page = async() => {
  return (
    <BlogSection category="technology"/>
  )
}

export default page