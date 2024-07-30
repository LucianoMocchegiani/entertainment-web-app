import React, { useState, useEffect } from 'react'
import { getSeries } from '@/firebase/endpoints/series'
import Link from 'next/link'

const AllSeries = ({selectGenre, selectPlatform, selectLabel}) => {
    const [series, setSeries] = useState([]);
	async function fetchData(){
		const options = {
			requestType:'genres', 
			platform:selectPlatform,
			genre:selectGenre,
			label:selectLabel,
			video:{id:'todas',name:'todas'},
			scroll:false, 
			setState:setSeries, 
			prevState:[],
		}
		const {data, success} = await getSeries(options)
		setSeries(data)
	}
    useEffect(() => {
        fetchData()
    }, [selectGenre, selectPlatform])

    return (
        <>
            <div className='flex flex-col justify-center items-center w-full'>
                {
                    series && (
                        <>
                            <div className='flex flex-wrap w-10/12 m-4'>
                                {series.map((serie, item) => {
                                    return (
                                        <Link type="button"  href={`/series/${serie.id}`}>
                                            <div className=''>
                                                <img src={"https://image.tmdb.org/t/p/w500"+serie?.poster_path} className="w-66 h-80 rounded-sm"/>
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

export default AllSeries
