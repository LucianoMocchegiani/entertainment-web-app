"use client"
import React, { useState, Suspense, useEffect} from 'react'
import {  getEpisodeDetailFirebase, getEpisodeDetail } from '@/firebase/endpoints/episodes'
import { getSerieDetail } from '@/firebase/endpoints/series'
import { getSeasonDetail } from '@/firebase/endpoints/seasons'
import CheckMyList from '../mylist/CheckMyListMovies'   
import { useRouter, useParams } from 'next/navigation'
import SelectComponent from '../reusable/Select';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiInformationOutline } from '@mdi/js';
import CustomVideoPlayer from './VideoPlayerPrueba'

const poster = process.env.NEXT_POSTER_PATCH_URL 

const Episode = ({ array }) =>{
    const router = useRouter()
    const {id,season, episode} = useParams()
    const handleSelectEpisode = (value)=>{  
        console.log(value?.episode_number)
        router.push(`/into/series/${id}/${season}/${value?.episode_number}`)
    }

    return(
        <SelectComponent
            text={'Capitulo'}
            objValue='name'
            objkey='episode_number'
            arraySelects={array}
            selectFunction={handleSelectEpisode}
            selected={episode?episode:''}
            icon={'book-play-outline'}
        />
    )
}

const Season = ({array }) =>{
    const {id, season, episode} = useParams()
    const router = useRouter()
    const handleSelectSeason = (value)=>{
        console.log(value?.season_number)
        router.push(`/into/series/${id}/${value?.season_number}/${1}`)
    }
    return(
        <SelectComponent
            text={'Temporada'}
            objValue='name'
            objkey='season_number'
            arraySelects={array}
            selectFunction={handleSelectSeason}
            selected={season?season:''}
            icon={'book-play-outline'}
        />
    )
}

const ViewEpisode = ({}) => {
    
    const {id, season, episode} = useParams()
    const [serieData, setSerieData] = useState(null)
    const [seasonData, setSeasonData] = useState(null)
    const [episodeData, setEpisodeData] = useState(null)
    const [loading, setLoading] = useState(false)

    const setAsistant = async()=>{
        setLoading(true)
        const serieData = await getSerieDetail(id)
        const seasonData = await getSeasonDetail(id, season)
        const episodeId = await getEpisodeDetail(id, season, episode)
        const episodeData = await getEpisodeDetailFirebase(episodeId?.data?.id)
        setSerieData(serieData.data)
        setSeasonData(seasonData.data)  
        setEpisodeData(episodeData.data)
        setLoading(false)
    }

    useEffect(()=>{
        setAsistant() 
    },[])

    return !loading?(
        <>
           <div className='flex flex-col justify-center items-center '>
           <p className='text-white text-lg mb-3 mt-1 p-3'>{serieData?.name}</p>
                <CustomVideoPlayer/>
                 <div className='flex flex-col justify-center items-center w-8/12'>
                    <div className='flex flex-row justify-center items-center content-center h-auto py-1'>
                        <p className='text-white mx-2'>13+</p>
                        <p className='text-white mx-2'>{serieData?.release_date}</p>
                        <CheckMyList movie={serieData}/>
                        <Link type="button"  href={`series/${id}/${season}`}
                            className='flex flex-row justify-center items-center mx-5'
                        >
                            <Icon path={mdiInformationOutline} size={1} color='white'/>
                            <p className='text-white text-sm ml-1'>Info</p>
                        </Link>
                    </div>
                    <div className='flex flex-row justify-center items-center mb-2'>
                        <Season serie_id={id} array={serieData?.seasons} seasonData={seasonData}/>
                        <Episode serie_id={id} array={seasonData?.episodes} episodeData={episodeData}/>
                    </div >
                    <div className='flex flex-row items-center justify-center w-auto pb-5'>
                        {
                            serieData?.genres.map((genre, i) => {
                                return (
                                    <>
                                        <div className='color-white pl-2 text-sm text-white' key={genre.id+i}>{genre.name}</div>
                                        {(i+1)!=serieData?.genres.length?<div className='w-1 h-1 bg-white mr-2 ml-2 rounded-sm text-white' key={i}></div>:null}
                                    </>
                                )
                            })
                        }
                    </div>
                    <p className='text-white w-11/12 lg:w-8/12 text-lg'>
                        {episodeData?.overview}
                    </p>
                </div>
            </div>
        </>
        
    ):<></>
}

export default ViewEpisode
