import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Weather"
}

export const revalidate = 60

const page = async() => {
  return (
    <BlogSection category="weather"/>
  )
}

export default page