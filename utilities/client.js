import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";



export const client = createClient({
    // projectId: "ikyv065w" ,
    // projectId: "464ef0yg",
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2024-02-26",
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)

export const viewCounter = async (post) =>{
  const updatedViews = (post.views) + 1;
  await client.patch(post._id)
  .set({ views: updatedViews })
  .commit();

  return(null)
}
