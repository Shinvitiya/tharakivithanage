import { MdScience, MdMovie, MdTrendingUp } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { notFound } from "next/navigation";

import { client} from "./client";


export const getContent = async (keyword) =>{
    const query = `*[_type == "${keyword}" ] | order(_createdAt desc)`;
    const content = await client.fetch(query)
    return content
  }
export const getPost = async (category,slug) =>{
  const query = `*[_type == "${category}" && slug.current == "${slug}"][0]`;
  const content = await client.fetch(query)
  if (!content){
    notFound()
  }
  return content
}

export const getDate = (date) =>{
  const day = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  })
  return (day)
}

export const entertainmentIcon = <MdMovie />
export const trendingIcon = <MdTrendingUp />
export const scienceIcon = <MdScience />
export const technologyIcon = <GiGearStickPattern />

export const sideBarTabs =  [
  {
    tabName: "trending",
    link: "/",
    icon: trendingIcon
  },
  {
    tabName: "science",
    link: "/science",
    icon: scienceIcon
  },
  {
    tabName: "technology",
    link: "/technology",
    icon: technologyIcon
  },
  {
    tabName: "entertainment",
    link: "/entertainment",
    icon: entertainmentIcon
  },  
]

export const extractPathName = (pathname) =>{
  // Split the pathname by '/'
  const parts = pathname.split('/');
  
  // If the pathname has only one part, return it
  if (parts.length === 1) {
      return parts[0];
  }
  // Otherwise, return the first part
  return '/' + parts[1];
}

export const siteInfo = {
  name: "Tharaki Vithanage",
  email: "blog@email.com",
  url: process.env.BASE_URL
}
