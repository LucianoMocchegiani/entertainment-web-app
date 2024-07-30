import React from 'react'
import { useStorage } from '@/context/storageContext'
import Icon from '@mdi/react';
import { mdiCheckboxOutline } from '@mdi/js';
import { mdiCheckboxBlankOutline } from '@mdi/js';

const  CheckMyList = ({movie}) => {
    const { setMyListSeries, my_list_series} = useStorage()
    return(
        
        <button
            className='border-none'
            onClick={() => {setMyListSeries(movie)}}>
            {my_list_series.filter(e => e?.id === movie?.id).length?<Icon path={mdiCheckboxOutline} size={1}  color='#fff'/>
            :<Icon path={mdiCheckboxBlankOutline} size={1} color='#fff'/>}
            <p>Mi lista</p>
        </button>
    )
}
export default CheckMyList