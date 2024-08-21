"use client"
import React, { Suspense } from 'react'
import { getSeasonDetailFirebase } from '@/firebase/endpoints/seasons'
import { getSerieDetail } from '@/firebase/endpoints/series';
import Icon from '@mdi/react';
import { mdiPlayOutline } from '@mdi/js';
import { useParams } from "next/navigation";
import Link from 'next/link';

const EpisodeCard = ({episodeData})=>{	
	const {id, season, episode} = useParams()
	return(
		<Link type="button"  href={`/into/series/${id}/${season}/${episodeData?.episode_number}`}
			className='flex flex-row w-11/12 lg:min-w-[400px] lg:max-w-[800px] lg:w-auto bg-white rounded-sm justify-center items-center mb-5 px-2'
		>
			<p className='text-black text-lg truncate'>{episodeData?.episode_number+'-  '+episodeData?.name}</p>
			<div className='mx-5'></div>
			<Icon path={mdiPlayOutline } size={1} color='black'/>
			<p className='text-black text-sm ml-5'>Reproducir</p>
		</Link>
	)
}

const Detail = async () =>{
	const {id, season} = useParams()
	const serieResponse = await getSerieDetail(id)
	const selectSeason = serieResponse.data?.seasons?.filter(e => e.season_number == season)
	const idSeason =selectSeason[0]?.id
	const {data} = await getSeasonDetailFirebase(idSeason)
	const seasonData = data
	return(
		
		<div className='flex flex-col justify-center items-center'>
			<div style={{width:350, height:550,  backgroundImage:`url(${seasonData?.poster_path?"https://image.tmdb.org/t/p/w500"+seasonData.poster_path:null})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor:'white'}}>
                <div className='bg-custom-linear h-full flex justify-center items-center'>
                </div>
            </div>
			<p className='text-white w-11/12 lg:w-8/12 text-lg mb-5'>
                {seasonData?.overview}
            </p>
			<>
				{seasonData?.episodes?.map((episode, i) =>{
					return(
						<EpisodeCard episodeData={episode} key={i}/>
					)
				})}
			</>
		</div>
	)
}
const SeasonDetail =  () => {
	return (
		<>
			<Suspense fallback={<p>Cargando...</p>}>
				<Detail/>
			</Suspense>		
		</>
	)
}

export default SeasonDetail

