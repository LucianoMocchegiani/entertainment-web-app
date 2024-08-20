"use client"
import React, { useState } from 'react'
import Series from '../carrusel/Series';
import FrontPage from '../frontPage/FrontPage';
import Filters from '../filters/Filters';
import AllSeries from './AllSeries';
import genres from './genres';
import KeepWatchingSeries from './KeepWatchingSeries';
import RecomendationSeries from './RecommendationSerie';

const SeriesPage = () => {
	const [selectPlatform, setSelectPlatform] = useState({
        id:'Ninguna',
        name:'Ninguna'
    })
	const [selectGenre, setSelectGenre] = useState({
        id:'Ninguno',
        name:'Ninguno'
    })
	const [selectLabel, setSelectLabel] = useState({
        id:'Ninguna',
        name:'Ninguna'
    })
	
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<FrontPage type='series'/>	
				<Filters setGenre={setSelectGenre} genre={selectGenre} setPlatform={setSelectPlatform} platform={selectPlatform} setLabel={setSelectLabel} label={selectLabel} genresList={genres}/>
				{ selectGenre.id !=='Ninguno'?
				<>
					<AllSeries selectGenre={selectGenre} selectPlatform={selectPlatform} selectLabel={selectLabel} />
				</>:
				<>
					<KeepWatchingSeries/>
					<RecomendationSeries/>
                    <Series text='Drama' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id:18,name:'Drama'}} />
					<Series text='Comedia' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id:35,name:'Comedia'}} />
					<Series text='Sci-Fi & Fantasy' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id:10765,name:'Sci-Fi & Fantasy'}} />
                    
				</>}
			</div>
		</>
	)
}

export default  SeriesPage
