"use client"
import React from 'react'
import { useStorage } from '@/context/storageContext'
import Link from 'next/link'

const MyList = () => {
    const {my_list_movies, my_list_series} = useStorage()

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                {my_list_movies?<h3 className="text-white text-lg mt-2">Mi Lista</h3>:<h3 className="text-white text-lg mt-2 h-7"></h3>}    
                <div className='flex flex-wrap w-12/12 m-4 justify-center items-center'>
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
                        {my_list_movies?.map((movie, item) => {
                            return (
                                <Link type="button"  href={"movies/"+movie?.id}>
                                    <div className='py-5'>
                                        <img src={"https://image.tmdb.org/t/p/w500"+movie?.poster_path} className="w-40 h-66 lg:w-56 lg:h-80 rounded-sm"/>
                                    </div>
                                </Link>
                            )
                        })}
                        {my_list_series?.map((movie, item) => {
                            return (
                                <Link type="button"  href={"movies/"+movie?.id}>
                                    <div className='py-5'>
                                        <img src={"https://image.tmdb.org/t/p/w500"+movie?.poster_path} className="w-40 h-66 lg:w-56 lg:h-80 rounded-sm"/>
                                    </div >
                                </Link>
                            )
                        })}
                    </>}
                </div>
            </div>
        </>
    )
}

export default MyList
