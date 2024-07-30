"use client"
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext';
import { useStorage } from '../../context/storageContext';
import Loading from '../reusable/Loading';
import { useRouter } from 'next/navigation'

const LoadingStarting = ({}) => {
    const router = useRouter()
    const { user, login } = useAuth()
    const { handleSetUser } = useStorage()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const setUser = async ()=>{
            const response = await handleSetUser();
            if(response.success){
                router.push('/into')
            }
            setLoading(false)
        }
        setUser()
    }, [user]);
    return (
        <>{loading?
            <div className='w-full h-screen fixed bg-white flex justify-center z-50'>
                <Loading/>
            </div>
            :null} 
        </>
    ) }

export default LoadingStarting
