import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "News"
}

export const revalidate = 60

const page = async() => {
  return (
    <BlogSection category="news"/>
  )
}

export default page