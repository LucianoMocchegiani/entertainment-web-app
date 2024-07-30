"use client"
import React, { useState } from 'react'
import Series from '../carrusel/Series';
import Movies from '../carrusel/Movies';
import FrontPage from '../frontPage/FrontPage';

const Home = () => {
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
				<FrontPage type='home'/>	
				<>
					<Series text='Top series' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id:'Ninguno',name:'Ninguno'}} />
					<Movies text='Top peliculas' label={selectLabel} requestType = {'genres'} platform={selectPlatform} genre={{id: 'Ninguno',name: 'Ninguno'}} />
				</>
			</div>
		</>
	)
}

export default Home
