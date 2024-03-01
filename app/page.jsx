import Banner from "@/components/Banner";
import PostsCard from "@/components/PostCard";
import Posts from "@/components/Posts";
import Image from "next/image";

import { entertainmentIcon, scienceIcon, technologyIcon } from "@/utilities";

export default function Home() {
  return (
    <div className='col-span-3 mt-5  lg:pl-8 rounded-md space-y-8'>
      <Banner />

      <PostsCard 
      category="entertainment" 
      firstPost={1} 
      lastPost={5} 
      Icon={entertainmentIcon} 
      className=" bg-primary-pink"
      />
      <PostsCard 
      category="technology" 
      firstPost={1} 
      lastPost={5} 
      Icon={technologyIcon} 
      className=" bg-primary-purple"
      />

      <PostsCard 
      category="science" 
      firstPost={0} 
      lastPost={5} 
      Icon={scienceIcon} 
      className=" bg-primary-gray"
      />

      <Posts 
        start={1}
        end={7}
      />

      
    </div>
  );
}
