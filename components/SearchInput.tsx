'use client'
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import Image from "next/image";
const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(()=>{
        const debounce = setTimeout(()=>{
           if(searchQuery){
            const newURL = formUrlQuery({
                params: searchParams.toString(),
                key:'topic',
                value:searchQuery,
            });
            router.push(newURL, {scroll:false})
        }
        else{
            if(pathname==='/companions'){
                const newURL = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove:['topic'],
            });
            router.push(newURL, {scroll:false})
            }
        } 
        }, 500)
        
    },[searchParams,pathname,router,searchQuery])
  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
         <Image src='./icons/search.svg' alt="Search" width={15} height={15}/>
         <input 
            placeholder="Search companions ...."
            className="outline-none"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
         />
    </div>
  )
}

export default SearchInput