"use client"
import React from 'react'
import { useStorage } from '@/context/storageContext'
import Link from 'next/link'

const MyList = () => {
    const {my_list_movies, my_list_series} = useStorage()

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                {
                    (my_list_movies?.length == 0 && my_list_series?.length == 0) ?(
                        <div className=' w-72 h-96 flex flex-col justify-center items-center'>
                            <p className='text-white text-lg '>No hay nada en tu lista..</p>
                            <Link type="button"  href={"home/"}>
                                <p className='text-white text-lg'>Busca nuevo contenido</p>
                            </Link>
                        </div>
                    )
                :
                <>
                <div className='flex flex-wrap w-full m-10'>
                    {my_list_movies?.map((movie, item) => {
                        return (
                            <Link type="button"  href={"movies/"+movie?.id}>
                                <div className='py-5'>
                                    <img src={"https://image.tmdb.org/t/p/w500"+movie?.poster_path} className="w-66 h-80 rounded-sm"/>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className='flex flex-wrap w-full m-10'>
                    {my_list_series?.map((movie, item) => {
                         return (
                            <Link type="button"  href={"movies/"+movie?.id}>
                                <div className='py-5'>
                                    <img src={"https://image.tmdb.org/t/p/w500"+movie?.poster_path} className="w-66 h-80 rounded-sm"/>
                                </div >
                            </Link>
                        )
                    })}
                </div></>}
            </div>
        </>
    )
}

export default MyList
