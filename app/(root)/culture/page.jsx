import React from 'react'

import BlogSection from '@/components/BlogSection'

export const metadata = {
  title: "Culture"
}
export const revalidate = 60

const page = async() => {
  return (
    <BlogSection category="culture"/>
  )
}

export default page