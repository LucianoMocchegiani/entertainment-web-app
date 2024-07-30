"use client"
import React, { useState } from 'react'
import Movies from '../carrusel/Movies';
import FrontPage from '../frontPage/FrontPage';
import Filters from '../filters/Filters';
import genres from './genres';
import AllMovies from './AllMovies'
import KeepWatchingMovies from './KeepWatchingMovies';
import RecomendationMovies from './RecommendationMovie';

const MoviesPage = () => {
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
				<FrontPage type='movies'/>	
				<Filters setGenre={setSelectGenre} genre={selectGenre} setPlatform={setSelectPlatform} platform={selectPlatform} setLabel={setSelectLabel} label={selectLabel} genresList={genres}/>
				{ selectGenre.id !=='Ninguno'?
				<>
					<AllMovies selectGenre={selectGenre} selectPlatform={selectPlatform} selectLabel={selectLabel} />
				</>:
				<>
					<KeepWatchingMovies/>
					<RecomendationMovies/>
                    <Movies text='Comedia' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id: 35,name: "Comedia"}} />
					<Movies text='Familia' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id:10751, name:'Familia'}} />
					<Movies text='Acción' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id: 28,name: "Acción"}} />
					<Movies text='Ciencia ficción' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id:878, name:'Ciencia ficción'}} />
					<Movies text='Romance' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id:10749 ,name:'Romance'}} />
				</>}
			</div>
		</>
	)
}

export default MoviesPage
