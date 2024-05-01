import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Travel"
}

export const revalidate = 60

const page = async() => {
  return (
    <BlogSection category="travel"/>
  )
}

export default page