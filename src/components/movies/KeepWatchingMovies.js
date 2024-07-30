"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import { useStorage } from '@/context/storageContext'

function CardMovie({movie}){
    return( 
      <div key={movie?.id} className='mx-2 my-2 pb-1 px-1 shadow-lg'>
        <Link type="button"  href={"movies/"+movie?.id}>
        <img src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} className="w-66 h-80"/></Link>
      </div>
    )
}

const KeepWatchingMovies = ()=>{
    const {keep_watching_movies} = useStorage()
    var settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 6,
        autoplay:true,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow:3,
              slidesToScroll:1
            }
          }
        ]
    };
	return (
        <>{keep_watching_movies.length?
            <>
                <h3 className="text-white text-lg mt-10">{'Seguir viendo'}</h3>
                <Slider {...settings} className="pt-1 w-11/12">
                {keep_watching_movies?.map((e)=>(
                    <CardMovie movie={e}/>
                ))}
                </Slider>
            </>:null}
      </>
	)   
}

export default KeepWatchingMovies
