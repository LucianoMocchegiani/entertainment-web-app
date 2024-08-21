"use client"
import React, { useState, useEffect } from 'react'
import { searchMoviesAlgolia } from '@/firebase/endpoints/movies'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import Link from 'next/link'
import EsqueletoCard from './EsqueletoCard';

const SearchScreen = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(null);

    const handleSearch = async (search) =>{
        const response = await searchMoviesAlgolia(search)
        setResults(response)
        console.log(response)
    }
    const handleSetSearch = (e) => {
        setSearch(e.target.value)

    }

    useEffect(() => {
        handleSearch(search)
    }, [search])

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center mt-2 w-full'>
                    <div className='w-72 h-14 bg-white flex flex-row justify-center items-center pr-3 m-5 rounded-sm'>
                        <Icon path={mdiMagnify} size={1} color="#B1B1B1" className='m-2'/>
                        <input className='text-sm text-black m-2 bg-white .placeholder-gray-200 h-full w-full focus:outline-none border-none' value={search} onChange={(text) => handleSetSearch(text)}  placeholder="Busca peliculas y series." />
                    </div>
                </div>
                {!search?<h3 className="text-white text-lg mt-2">Mas buscadas</h3>:<h3 className="text-white text-lg mt-2 h-7"></h3>}
                {
                    results?(
                        <>
                            <div className='flex flex-wrap w-10/12 m-4 justify-center items-center'>
                                {results.data?.map((movie, item) => {
                                    return (
                                        <Link type="button"  href={movie.path}>
                                            <div className=''>
                                                <img src={"https://image.tmdb.org/t/p/w500"+movie?.poster_path} className="w-40 h-66 lg:w-56 lg:h-80 rounded-sm"/>
                                            </div >
                                        </Link> 
                                    )
                                })}
                            </div>
                        </>
                    ):(
                        <div className='flex flex-wrap w-10/12 m-4'>{
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((e)=>{
                                return (<EsqueletoCard key={e}/>)})
                            }
                        </div>)
                }
            </div >
        </>
    )
}

export default SearchScreen
