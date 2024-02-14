import { useRoom } from "@/app/liveblocks.config"
import LiveblocksProvider from "@liveblocks/yjs"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import {Doc} from "yjs"
import DescriptionEditor from "./DescriptionEditor"

export default function CardDescription(){
    const {cardId} = useParams()
    const room = useRoom()

    const[doc,setDoc] = useState<Doc|null>(null)
    const[provider,setProvider] = useState<LiveblocksProvider<any,any,any,any>|null>(null)

    useEffect(()=>{
        const yDoc = new Doc()
        const yProvider = new LiveblocksProvider(room,yDoc)

        setDoc(yDoc)
        setProvider(yProvider)

        return()=>{
           yDoc.destroy()
           yProvider.destroy()
        }

    },[room])

    if(!doc || !provider){
        return null
    }

    return(
        <div>
        <DescriptionEditor doc={doc} provider={provider} cardId={cardId.toString()}/>
        </div>
    ) 
}
