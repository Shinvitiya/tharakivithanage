import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Entertainment"
}

export const revalidate = 60

const page = async() => {
  return (
    <BlogSection category="entertainment"/>
  )
}

export default page