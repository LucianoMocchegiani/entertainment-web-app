import React from 'react'
import { useStorage } from '@/context/storageContext'
import Icon from '@mdi/react';
import { mdiCheckboxOutline } from '@mdi/js';
import { mdiCheckboxBlankOutline } from '@mdi/js';

const  CheckMyList = ({movie}) => {
    const { setMyListMovies, my_list_movies} = useStorage()
    return(
        
        <button
            className='border-none flex justify-center item-center  ' 
            onClick={() => {setMyListMovies(movie)}}>
            {my_list_movies.filter(e => e?.id === movie?.id).length?<Icon path={mdiCheckboxOutline} size={1}  color='#fff'/>
            :<Icon path={mdiCheckboxBlankOutline} size={1} color='#fff'/>}
            <p className='text-white'>Mi lista</p>
        </button>
    )
}
export default CheckMyList