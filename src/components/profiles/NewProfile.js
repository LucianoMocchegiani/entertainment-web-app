"use client"
import React, { useState } from 'react'
import { postProfile } from '@/firebase/endpoints/profiles';
import { useStorage } from '@/context/storageContext';
import Loading from '../reusable/Loading';
import { useRouter } from 'next/navigation'

const NewProfile = ({navigation}) => {
    const router = useRouter()
    const [state, setState] = useState({
        name:'',
        avatar:''
    })
    const [loading, setLoading] =useState(false)
    const { handleSetUser, userStorage } = useStorage ()
    const addProfile = async (data)=>{
        try{
            setLoading(true)
            if(!state.name){
                setLoading(false)
                return alert('Complete los campos')
            }
            const { success, message } = await postProfile(data)
            if( success ){
                const response = await handleSetUser()
                if(response.success){
                    setState({
                        name:'',
                        avatar:''
                    })
                    setLoading(false)
                    alert('Perfil creado ')
                    return router.push("/")
                }else{
                    return alert('Hubo un problema: ',message)
                }
            }else{
                setLoading(false)
                return alert('Hubo un problema: ', message)
            }

        }catch(error){
            setLoading(false)
            return alert('Hubo un problema: ', error.message)
        }
    }
    const handleChangeText = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    return (
        <>
        <div className="flex content-center items-center justify-center h-full w-full">
            <div className="w-full px-4 bg-white">
                {loading?<div className=' w-full h-auto px-10 py-10 bg-white'><Loading/></div>:
                <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg bg-black border-0 pt-10 pb-10">
                    <div className="flex-col px-4 w-full">
                    <div className="text-slate-100 text-center mb-3 ">
                        <small>Crear perfil</small>
                    </div>
                    <form>
                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-slate-200 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Nombre
                        </label>
                        <input
                            name='name'
                            value={state.name}               
                            onChange={handleChangeText}               
                            className="border-0 px-3 py-3 placeholder-slate-400 text-slate-200 bg-stone-800 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Nombre"
                        />
                        </div>
                        <div className='h-6 flex items-center'>     
                        </div>
                        {/* <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-slate-200 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Avatar
                        </label>
                        <input
                            className="border-0 px-3 py-3 placeholder-slate-400 text-slate-200 bg-stone-800 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Avatar"
                            name='avatar'
                            value={state.avatar}                 
                            onChange={handleChangeText}
                        />
                        </div> */}
                        <div className='h-6 flex items-center'>       
                        </div>
                        <div>
                        </div>
                        <div className='h-3.5'>  
                        </div>
                        <div className="text-center mt-6">
                        <button
                            className="bg-slate-100 text-black active:bg-slate-200 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="button"
                            onClick={()=>addProfile({name:state.name, avatar:state.avatar, userStorage:userStorage})}
                        >
                            Crear
                        </button>
                        </div>
                    </form>
                    </div>
                </div>}
            </div>
            </div>
        </>
    )
}

export default NewProfile
