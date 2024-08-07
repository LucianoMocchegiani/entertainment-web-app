"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import { useAuth}  from '@/context/authContext'

function Login(){
  const router = useRouter()
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const {login, loginWithGoogle, user} = useAuth()

  const handleChangeText = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try{
      const response =  await login(state.email, state.password)
      if(response.success){
        setState({ email: "", password: "",})
        router.push('/into')

      }
      return response

    }catch(error){
      return {success: false, message: error.message}
    }
  };

  const handleGoogleLogin = async () => {
    try{
      const response =  await loginWithGoogle()
      return response

    }catch(error){
      return {success: false, message: error.message}
    }
  }
  return (
    <>    
    {/* {user?<LoadingStarting/>:null} */}
    <div className='container mx-auto h-full pb-7 flex justify-center items-center'>
        <div className="container mx-auto px-4 h-full mt-20 pt-7 pb-2 bg-white" style={{ backgroundImage:'url("https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg")', width:'100%', heigth:'100%', backgroundSize:'cover',}}>
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black border-0 pt-10">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-slate-100 text-center mb-3 ">
                    <small>Iniciar sesion</small>
                </div>
                <form>
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-slate-200 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        value={state.email}               
                        onChange={handleChangeText}               
                        className="border-0 px-3 py-3 placeholder-slate-400 text-slate-200 bg-stone-800 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                    />
                    </div>
                    <div className='h-6 flex items-center'>     
                    </div>
                    <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-slate-200 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Contraseña
                    </label>
                    <input
                        className="border-0 px-3 py-3 placeholder-slate-400 text-slate-200 bg-stone-800 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        type='password'
                        name='password'
                        value={state.password}                 
                        onChange={handleChangeText}
                    />
                    </div>
                    <div className='h-6 flex items-center'>       
                    </div>
                    <div>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150 dark:bg-stone-600 dark:text-slate-200"
                        />
                        <span className="ml-2 text-sm font-semibold text-slate-200">
                        Recordarme
                        </span>
                    </label>
                    </div>
                    <div className='h-3.5'>  
                    </div>
                    <div className="text-center mt-6">
                    <button
                        className="bg-slate-100 text-black active:bg-slate-200 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Ingresar
                    </button>
                    </div>
                    <div className="w-1/2 text-slate-200 mt-4">
                    <Link href="/"><small>Olvido su contraseña?</small></Link>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Login;



