import React from 'react';

import { client } from '@/utilities/client';
import { sideBarTabs } from '@/utilities';
import PostsInfiniteScroll from './InfiniteScroll/PostsInfiniteScroll';

export const revalidate = 60
const createQuery = ()=>{
    const tabs = sideBarTabs
    .filter(tab => tab.tabName !== "trending")
    .map(tab => tab.tabName);

    const query = tabs.map(tabName => `...*[_type == "${tabName}" ] | order(_createdAt desc)[5..-1]`).join(', ')
    return query
}

const getContent = async () =>{
    // Gets posts from each category newest first without the first x number of posts and concatenates them into and reorders this newly concatenated array newest first

    // Returns something like this while dynamically creating a query for each tab section you add
    
    // `[...*[_type == "technology" ] | order(_createdAt desc)[5..-1], ...*[_type == "science" ] | order(_createdAt desc)[5..-1], ...*[_type == "entertainment" ]| order(_createdAt desc)[5..-1]] | order(_createdAt desc)`;

    const query = `[${createQuery()}] | order(_createdAt desc)` 
    const posts = await client.fetch(query)
    return posts
}

const Posts = async () => {
  let posts = await getContent();
  

  return (
    <PostsInfiniteScroll content={posts}/>
  )
}

export default Posts