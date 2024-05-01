import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Business"
}

export const revalidate = 60

const page = async() => {
  return (
    <BlogSection category="business"/>
  )
}

export default page