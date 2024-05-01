import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Earth"
}
export const revalidate = 60

const page = async() => {
  return (
    <BlogSection category="earth"/>
  )
}

export default page