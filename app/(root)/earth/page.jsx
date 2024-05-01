import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Earth"
}

const page = async() => {
  return (
    <BlogSection category="earth"/>
  )
}

export default page