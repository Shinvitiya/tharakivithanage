import Banner from "@/components/Banner";
import PostsCard from "@/components/PostCard";
import Posts from "@/components/Posts";

import { businessIcon, cultureIcon, earthIcon, entertainmentIcon, newsIcon, scienceIcon, sportIcon, technologyIcon, travelIcon, weatherIcon } from "@/utilities";

function Home() {
  return (
    <div className='col-span-3 mt-5  lg:pl-8 rounded-md space-y-8'>
      <Banner />

      <PostsCard 
      category="business" 
      firstPost={1} 
      lastPost={5} 
      Icon={businessIcon} 
      className=" bg-primary-pink"
      />

      <PostsCard 
      category="culture" 
      firstPost={1} 
      lastPost={5} 
      Icon={cultureIcon} 
      className=" bg-primary-purple"
      />

      <PostsCard 
      category="earth" 
      firstPost={1} 
      lastPost={5} 
      Icon={earthIcon} 
      className=" bg-primary-gray"
      />

      <PostsCard 
      category="entertainment" 
      firstPost={1} 
      lastPost={5} 
      Icon={entertainmentIcon} 
      className=" bg-primary-pink"
      />

      <PostsCard 
      category="news" 
      firstPost={1} 
      lastPost={5} 
      Icon={newsIcon} 
      className=" bg-primary-purple"
      />

      <PostsCard 
      category="science" 
      firstPost={0} 
      lastPost={5} 
      Icon={scienceIcon} 
      className=" bg-primary-gray"
      />

      <PostsCard 
      category="sports" 
      firstPost={0} 
      lastPost={5} 
      Icon={sportIcon} 
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
      category="travel" 
      firstPost={0} 
      lastPost={5} 
      Icon={travelIcon} 
      className=" bg-primary-gray"
      />

      <PostsCard 
      category="weather" 
      firstPost={0} 
      lastPost={5} 
      Icon={weatherIcon} 
      className=" bg-primary-pink"
      />

      

      <Posts/>

      
    </div>
  );
}

export default Home