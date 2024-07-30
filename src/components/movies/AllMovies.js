import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getMovies } from '@/firebase/endpoints/movies';

const AllMovies = ({selectGenre, selectPlatform, selectLabel}) => {
    const [movies, setMovies] = useState([]);
	async function fetchData(){
		const options = {
			requestType:'genres', 
			platform:selectPlatform,
			genre:selectGenre,
			label:selectLabel,
			video:{id:'todas',name:'todas'},
			scroll:false, 
			setState:setMovies, 
			prevState:[],
		}
		const {data, success} = await getMovies(options)
		setMovies(data)
	}
    useEffect(() => {
        fetchData()
    }, [selectGenre, selectPlatform])

    return (
        <>
            <div className='flex flex-col justify-center items-center w-full'>
                {
                    movies && (
                        <>
                            <div className='flex flex-wrap w-10/12 m-4'>
                                {movies.map((movie, item) => {
                                    return (
                                        <Link type="button"  href={`/movies/${movie.id}`}>
                                            <div className=''>
                                                <img src={"https://image.tmdb.org/t/p/w500"+movie?.poster_path} className="w-66 h-80 rounded-sm"/>
                                            </div >
                                        </Link> 
                                    )
                                 })}
                                    
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default AllMovies
