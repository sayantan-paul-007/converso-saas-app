'use client'
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants";
const SubjectFilter = () => {
   
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || '';
    const [subject, setSubject] = useState('');
    useEffect(()=>{
        let newURL =''
          if(subject==='all'){
                newURL = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove:['subject'],
            });
            
        }
        else{
            
             newURL = formUrlQuery({
                params: searchParams.toString(),
                key:'subject',
                value:subject,
            });
        } 
        router.push(newURL, {scroll:false})
        
    },[subject])
  return (
<Select onValueChange={setSubject} value={subject}>
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Subject" />
  </SelectTrigger>
  <SelectContent>

    <SelectItem value="all">All Subjects</SelectItem>
    {
        subjects.map((subject)=>(
            <SelectItem key={subject} value={subject} className="capitalize">{subject}</SelectItem>
        ))
    }
    
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
  )
}

export default SubjectFilter