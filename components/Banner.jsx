import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { client } from '@/utilities/client';
import { sideBarTabs } from '@/utilities';
import Carousel from './Carousel';


export const revalidate = 60

const createQuery = ()=>{
    const tabs = sideBarTabs
    .filter(tab => tab.tabName !== "trending")
    .map(tab => tab.tabName);

    const query = tabs.map(tabName => `...*[_type == "${tabName}" ] | order(_createdAt desc)[0...1]`).join(', ')
    return query
}

const getContent = async () =>{
    const query = `[${createQuery()}] | order(_createdAt desc)`;
    const content = await client.fetch(query)
    return content
  }

const Banner = async () => {

    const posts = await getContent()

  return (
    <div className='w-full bg-primary-white shadow-2xl rounded-xl overflow-hidden'>
        <Carousel  posts = {posts}/>
    </div>
  )
}

export default Banner