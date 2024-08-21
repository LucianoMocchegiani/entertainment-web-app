"use client"
import React, { Suspense } from 'react'
import Link from 'next/link'
import { useParams } from "next/navigation";
import Icon from '@mdi/react';
import { mdiInformationOutline } from '@mdi/js';
import { getSerieDetail } from '@/firebase/endpoints/series'

const poster = process.env.NEXT_POSTER_PATCH_URL 

const SeasonCard = ({seasonData})=>{
	const {id, season} = useParams()
	return(
		<Link type="button"  href={`/into/series/${id}/${seasonData?.season_number}`}
			className='flex flex-row w-11/12 lg:min-w-[400px] lg:max-w-[800px] lg:w-auto bg-white rounded-sm justify-center items-center mb-5 px-2'
		>
			<p className='text-black text-lg mr-5 truncate'>{seasonData?.season_number+'-  '+seasonData?.name}</p>
			<div className='mx-5'></div>
			<Icon path={mdiInformationOutline} size={1} color='black'/>
			<p className='text-black text-sm ml-1'>Info</p>
		</Link>	
	)
}

const Detail = async () =>{
	const {id} = useParams()
	const {data} = await getSerieDetail(id)
	const serie = data
	return(
		
		<div className='flex flex-col justify-center items-center'>
			<div style={{width:350, height:550,  backgroundImage:`url(${serie?.poster_path?"https://image.tmdb.org/t/p/w500"+serie.poster_path:null})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor:'white'}}>
                <div className='bg-custom-linear h-full flex justify-center items-center'>
                </div>
            </div>

			<div className='flex flex-row items-center justify-center  w-auto pb-10'>
                {
                    serie?.genres.map((genre, i) => {
                        return (
                            <>
                                <div className='color-white pl-2 text-sm text-white' key={genre.id+i}>{genre.name}</div>
                                {(i+1)!=serie?.genres.length?<div className='w-1 h-1 bg-white mr-2 ml-2 rounded-sm text-white' key={i}></div>:null}
                            </>
                        )
                    })
                }
            </div>
			<p className='text-white w-11/12 lg:w-8/12 text-lg mb-5'>
                {serie?.overview}
            </p>
			<>
				{serie?.seasons?.map((season, i) =>{
					return(
						<SeasonCard seasonData={season} key={i}/>
					)
				})}
			</>
		</div>
	)
}

const SerieDetail =  () => {
	return (
		<>
			<Suspense fallback={<p>Cargando...</p>}>
				<Detail/>
			</Suspense>		
		</>
	)
}

export default SerieDetail

