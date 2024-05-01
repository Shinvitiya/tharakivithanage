import { MdScience, MdMovie, MdTrendingUp, MdBusinessCenter, MdHandshake, MdNewspaper, MdCloudySnowing } from "react-icons/md";
import { IoMdGlobe, IoMdFootball, IoMdAirplane, } from "react-icons/io";
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

export const businessIcon = <MdBusinessCenter />
export const cultureIcon = <MdHandshake />
export const earthIcon = <IoMdGlobe />
export const entertainmentIcon = <MdMovie />
export const newsIcon = <MdNewspaper />
export const scienceIcon = <MdScience />
export const sportIcon = <IoMdFootball />
export const technologyIcon = <GiGearStickPattern />
export const travelIcon = <IoMdAirplane />
export const weatherIcon = <MdCloudySnowing />
export const trendingIcon = <MdTrendingUp />


export const sideBarTabs =  [
  {
    tabName: "trending",
    link: "/",
    icon: trendingIcon
  },
  {
    tabName: "business",
    link: "/business",
    icon: businessIcon
  },
  {
    tabName: "culture",
    link: "/culture",
    icon: cultureIcon
  },
  {
    tabName: "earth",
    link: "/earth",
    icon: earthIcon
  },
  {
    tabName: "entertainment",
    link: "/entertainment",
    icon: entertainmentIcon
  },
  {
    tabName: "news",
    link: "/news",
    icon: newsIcon
  },
  {
    tabName: "science",
    link: "/science",
    icon: scienceIcon
  },
  {
    tabName: "sports",
    link: "/sports",
    icon: sportIcon
  },
  {
    tabName: "technology",
    link: "/technology",
    icon: technologyIcon
  },
  {
    tabName: "travel",
    link: "/travel",
    icon: travelIcon
  },
  {
    tabName: "weather",
    link: "/weather",
    icon: weatherIcon
  }
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
