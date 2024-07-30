import React, { useState } from 'react'
import Hero from './Hero'
import { getHomeFrontPage, getMoviesFrontPage, getSeriesFrontPage} from '@/firebase/endpoints/frontPage'
import Loading from './LoadingFrontPage'

const FrontPage = ({type='home'})=>{
    const [frontPage, setFrontPage] =useState(null)
    const handleGetFrontPage = async ()=>{
        if(type==='home'){
            const {data, success}= await getHomeFrontPage()
            if(success && data.length){
                return setFrontPage(data[0])
            }
            return
        }else if(type==='movies'){
            const {data, success}= await getMoviesFrontPage()
            if(success && data.length){
                return setFrontPage(data[0])
            }
            return
        }else if(type==='series'){
            const {data, success}= await getSeriesFrontPage()
            if(success && data.length){
                return setFrontPage(data[0])
            }
            return
        }else{
            return
        }
		
	}
	handleGetFrontPage()
    return(
        <>
            <div style={{width:350, height:550,  backgroundImage:`url(${frontPage?.poster_path?"https://image.tmdb.org/t/p/w500"+frontPage.poster_path:null})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor:'white'}}>
                <div className='bg-custom-linear h-full flex justify-center items-center'>
                {frontPage?
                <Hero movie={frontPage} type={type}/>:
                <Loading/>}
                </div>
            </div>
        </>
    )
}
export default FrontPage