import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
    projectId: "ikyv065w" ,
    dataset: "production",
    apiVersion: "2024-02-26",
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)
