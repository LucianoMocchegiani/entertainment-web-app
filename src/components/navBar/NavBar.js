"use client"
import Authenticated from "./Authenticated"
import IconMovieNight from "./Icon"
import NoAuthenticated from "./NoAuthenticated"
import { useAuth } from "@/context/authContext"
import { usePathname } from 'next/navigation'



export default function NavBar(){
    const { user } = useAuth()
    const pathname = usePathname()
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 px-4">
            <IconMovieNight/>
            {user&&pathname!=='/'?<Authenticated/>:
            <NoAuthenticated/>}
        </div> 
    )
}

