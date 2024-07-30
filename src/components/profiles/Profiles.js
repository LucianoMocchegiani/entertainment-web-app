"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Icon from '@mdi/react';
import { mdiPencilOff, mdiPlusBox } from '@mdi/js';
import { mdiLogin } from '@mdi/js';
import { useAuth } from '@/context/authContext';
import { useStorage } from '@/context/storageContext';
import { postProfile } from '../../firebase/endpoints/profiles';
import { mdiDelete } from '@mdi/js';
import { mdiCog } from '@mdi/js';
import { mdiCogStop } from '@mdi/js';
import { mdiPencil } from '@mdi/js';

const CardProfile =({profile, onPress})=>{
    return(
        <div style={{flexDirection:'column',justifyContent:'center',alignContent:'center', alignItems:'center', margin:10}}>
            <button 
                className='w-auto h-auto'
                onClick={()=>onPress(profile.id)}>
                    
            <img className='w-20 h-auto' src={'https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41'}/>
            </button>
            <p className='text-white w-full text-center'>{profile.name}</p>
        </div>
    )
}
const Profiles = ({navigation}) => {
    const router = useRouter()
    const { logout, user }=useAuth()
    const { handleSetProfile, profiles, handleSetUser } = useStorage ()
    const [loading, setLoading] = useState(false)
    const [setting, setSetting] = useState(false)

    const handleLogout = async ()=>{
        try{
            const response = await logout()
            router.push("/login")
            return response
        }
        catch(error){
            const response = {success:false, message:error.message}
            return response
        }

    }
    const selectProfile = async(id)=>{
        try{
            setLoading(true)
            const { success, message } = await handleSetProfile(id)
            if(success){
                setLoading(false)
                return router.push("/into/home")
            }else{
                setLoading(false)
                // return Alert.alert('Hubo un problema', message)
            }
        }
        catch(error){
            setLoading(false)
            // return Alert.alert('Hubo un problema', error.message)
        }
    }
    return (
        <> 
            <div className='container pt-16 items-center flex flex-wrap justify-center h-screen'>
                <div className='container h-auto flex flex-wrap justify-center items-center'>
                    {profiles?.map((profile, index)=>{
                        return( 
                            <React.Fragment key={profile.id+index}>
                            {setting?
                            <Link href={`?editar-perfil=true&id=${profile.id}`}>
                                <div className='relative p-5 '>
                                <Icon path={mdiPencil} size={2} color='white' className='absolute top-0 right-0'/>
                                <CardProfile
                                    profile = {profile}
                                    onPress={(e)=>console.log('')}
                                />
                                </div>
                           </Link>:
                            <CardProfile
                                profile = {profile}
                                onPress = {selectProfile}
                            />
                           }
                           </React.Fragment>
                        )
                    }
                    )}
                    {profiles?.length < 4 && !setting?
                     <div style={{flexDirection:'column',justifyContent:'center',alignContent:'center', alignItems:'center', marginLeft:20}}>
                        <Link href="?crear-perfil=true ">
                            <button  className='flex justify-center align-center h-auto w-auto p-2'>
                                    <Icon path={mdiPlusBox} size={3} color="#ffffffdf"/>
                            </button>
                        </Link>
                        <p className='text-white w-full text-center'>{'Nuevo perfil'}</p>
                    </div>
                    : null}
                      <div style={{flexDirection:'column',justifyContent:'center',alignContent:'center', alignItems:'center', marginLeft:20}}>
                        {!setting?<>
                            <button onClick={()=>setSetting(true)}className='flex justify-center align-center h-auto w-auto p-2'>
                                <Icon path={mdiPencil} size={3} color="#ffffffdf"/>
                            </button>
                            <p className='text-white w-full text-center'>{'Editar perfiles'}</p>
                        </>
                        :
                        <>
                            <button onClick={()=>setSetting(false)}className='flex justify-center align-center h-auto w-auto p-2'>
                                <Icon path={mdiPencilOff} size={3} color="#ffffffdf"/>
                            </button>
                            <p className='text-white w-full text-center'>{'Terminar edicion'}</p>
                        </>
                        }       
                    </div>
                </div>
                <div className='container h-auto flex flex-col justify-center items-center'>
                    <p className='text-white'>Cerrar sesion</p>
                    <button  
                        className='flex justify-center align-center h-auto w-auto mt-2'
                        onClick={()=>handleLogout()}
                    >
                        <Icon onClick={()=>handleLogout()} path={mdiLogin} size={3} color='white'/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Profiles
