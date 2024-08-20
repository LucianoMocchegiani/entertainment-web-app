"use client"
import React, { useState, useEffect } from 'react'
import { getMovieDetailFirebase } from '@/firebase/endpoints/movies'
import CheckMyList from '../mylist/CheckMyListMovies'
// import VideoPlayerMovie from './VideoPlayerMovie'
import CustomVideoPlayer from '../series/VideoPlayerPrueba'
import { useParams } from "next/navigation";
const poster = process.env.NEXT_POSTER_PATCH_URL 

const ViewMovie = ({ }) => {
    const {id} = useParams()
    const [ fullscreen, setFullscreen ]= useState(false);
    const [loading, setLoading] = useState(false)
    const [state, setState]= useState({
        success: null,
        message: null,
        data: null
    })
    const handleSetState = async ()=>{
        const {success, message, data} = await getMovieDetailFirebase(id)
        setState({
            success: success,
            message: message,
            data: data
        })
    }
    useEffect(()=>{
        handleSetState()
    },[])
    useEffect(()=>{
        console.log(state)
    },[state])

    return !loading ? (
        <>
           <div className='flex flex-col justify-center items-center'>
           <p className='text-white text-lg'>{state?.data?.title}</p>
                <CustomVideoPlayer/>
                {!fullscreen?
                 <div className='flex flex-col justify-center items-center w-8/12'>
                    <div className='flex flex-row justify-center items-center content-center h-auto py-5'>
                        <p className='text-white mx-5'>13+</p>
                        <p className='text-white mx-5'>{state?.data?.release_date}</p>
                        <CheckMyList movie={state.data} className='mx-5'/>
                    </div>
                    <div className='flex flex-row items-center justify-center  w-auto pb-10'>
                        {
                            state?.data?.genres.map((genre, i) => {
                                return (
                                    <>
                                        <div className='color-white pl-2 text-sm text-white' key={genre.id+i}>{genre.name}</div>
                                        {(i+1)!=state?.data?.genres.length?<div className='w-1 h-1 bg-white mr-2 ml-2 rounded-sm text-white' key={i}></div>:null}
                                    </>
                                )
                            })
                        }
                    </div>
                    <p className='text-white w-8/12 text-lg'>
                        {state?.data?.overview}
                    </p>
                </div>:<p className='text-white'>{state?.data?.title}</p>}
            </div>
        </>
        
    ) : (
        <div className='flex flex-col justify-center items-center'/>
    )
}

export default ViewMovie
