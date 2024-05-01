import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Business"
}

const page = async() => {
  return (
    <BlogSection category="sports"/>
  )
}

export default page