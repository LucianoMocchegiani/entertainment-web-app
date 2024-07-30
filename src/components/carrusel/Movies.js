"use client"
import React, { useState, useEffect } from "react";
import Slider, {s} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import { getMovies, getMovieDetailFirebase } from "@/firebase/endpoints/movies";

function CardMovie({movie}){
  return( 
    <div key={movie?.id} onClick={()=>getMovieDetailFirebase()} className='mx-2 my-2 pb-1 px-1 shadow-lg'>
      <Link type="button"  href={"movies/"+movie?.id}>
        <img src={"https://image.tmdb.org/t/p/w500"+movie?.poster_path} className="w-66 h-80"/>
      </Link>
    </div>
  )
}

export default function Movies({ 
    label={id:'Ninguna',name:'Ninguna'}, 
    requestType = 'generic', 
    platform={id:'Ninguna',name:'Ninguna'}, 
    genre={id:'Ninguno',name:'Ninguno'}, 
    text='' }){
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
	const [item, setItem] = useState([]);
	async function fetchData(){
		const options = {
			requestType:requestType, 
			platform:platform,
			genre:genre,
			label:label,
			video:{id:'todas',name:'todas'},
			scroll:false, 
			setState:setItem, 
			prevState:[],
		}
    const response =  await getMovies(options)
    const data = response.data
    const success = response.success
    if(success){
      setItem(data)
    }
	}
	useEffect(() => {
		fetchData()
	}, [platform]);
  return(
    <>
      <h3 className="text-white text-lg mt-10">{text}</h3>
      <Slider {...settings} className="pt-1 w-11/12">
        {item?.map((e)=>(
          <CardMovie movie={e}/> 
        ))}
      </Slider>
    </>
  )
}