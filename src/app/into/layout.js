"use client"
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/authContext';
import { useStorage } from '@/context/storageContext'
import Loading from '@/components/reusable/Loading';
import {  usePathname, useSearchParams, useRouter } from 'next/navigation'
import NavBar from "@/components/navBar/NavBar";
import Footer from '@/components/footer/Footer';

export default function Layout({ children }) {
    const { user } = useAuth()
    const { handleSetUser, id } = useStorage()
    const [loading, setLoading] = useState(true)
    const [timeOut, setTimeOut] = useState(false)
    const [error, setError ] = useState(false)
    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const fullscreen = searchParams.get('fullscreen') === 'true';

    const setUser = async ()=>{
        setLoading(false)
        const response = await handleSetUser();
        if(response.success){
            setLoading(false)
        }else{
            router.push('/')
            setLoading(false)
        }
    }

    useEffect(() => {
        if(!id && user){
            setUser()
        }
        else if(!user){
            const a = setTimeout(function(){
                setTimeOut(true);
            }, 9000);
            if(timeOut){
                clearTimeout(a)
                router.push('/login')
                setLoading(false)
            }
        }else if(user && id){
            setLoading(false)
        }
    }, [user, timeOut]);


  return (
    <>{loading?
        <div className='w-full h-screen fixed bg-white flex justify-center z-50'>
            <Loading/>
        </div>
        :null}
        {!fullscreen?<NavBar/>:null}
        {children} 
        {!fullscreen?<Footer/>:null}
    </>
  );
}


