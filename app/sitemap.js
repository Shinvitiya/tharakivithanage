import { sideBarTabs } from "@/utilities";
import { client } from "@/utilities/client";

const getTabNames = () =>{
    const tabs = sideBarTabs
    .filter(tab => tab.tabName !== "trending")
    .map(tab => tab.tabName);
    return tabs
}

const createQuery = ()=>{
    const tabs = getTabNames()
    const query = tabs.map(tabName => `...*[_type == "${tabName}" ]`).join(', ')
    return query
}
const getContent = async () =>{
    const query = `[${createQuery()}]` 
    const content = await client.fetch(query)
    return content
}


export default async function sitemap() {
    const content = await getContent();
    const tabs = getTabNames()
    const tabEntries = tabs.map((tab)=>({
        url: `${process.env.BASE_URL}/${tab}`
    }))
    const postEntries = content.map(({slug:{current}, _type}) =>({
        url: `${process.env.BASE_URL}/${_type}/${current}`
    }))
    return [
        ...tabEntries,
        ...postEntries,
    ]
}