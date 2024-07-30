"use client"
import { useState } from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NoAuthenticated(){
    const pathname = usePathname()
    const [hidden, setHidden] = useState(true)
    const handleHidden =()=>{
        setHidden(!hidden)
    }
    return (
        <>
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 border-2 border-gray  invisible lg:visible xl:visible 2xl:visible">
                <li>
                    <Link href="/login" className={pathname==="/login"? "block py-2 px-3 text-white bg-black rounded":"block bg-black py-2 px-3 text-slate-400 rounded"} aria-current="page">Ingresar</Link>
                </li>
            </ul>
            <button onClick={handleHidden} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden xl:hidden 2xl:hidden" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            </button>       
            <div className= {hidden?"hidden w-full":"w-full"} id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 border-2 border-gray">
                <li>
                    <Link href="/login" className={pathname==="/login"? "block py-2 px-3 text-white bg-black rounded":"block bg-black py-2 px-3 text-slate-400 rounded"} aria-current="page">Ingresar</Link>
                </li>
            </ul>
            </div>
        </>
        
    )
}

