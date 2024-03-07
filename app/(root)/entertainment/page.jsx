import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Entertainment"
}

const page = async() => {
  return (
    <BlogSection category="entertainment"/>
  )
}

export default page