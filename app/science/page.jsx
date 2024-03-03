import React from 'react'

import { getContent } from '@/utilities'
import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Science"
}

const page = async() => {
  return (
    <BlogSection category="science"/>
  )
}

export default page