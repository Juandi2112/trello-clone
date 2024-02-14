import { Dispatch, ReactNode, createContext, useState } from "react";

export type OpenCardID= string|null
export type BoardContextProps = {
    openCard?: OpenCardID;
    setOpenCard?: Dispatch<React.SetStateAction<OpenCardID>>

    }
type ProviderProps ={
    children:React.ReactNode
}

export const BoardContext = createContext<BoardContextProps>({
    
})

export function BoardContextProvider({children}:ProviderProps){
    const [openCard,setOpenCard] = useState<OpenCardID>(null)
    return(
        <BoardContext.Provider value={{
            openCard,setOpenCard
        }}>
            {children}
        </BoardContext.Provider>
    )
}