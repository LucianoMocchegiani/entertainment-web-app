"use client"
import React, { useState, useEffect } from "react";
import Slider, {s} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import { getMovies, getMovieDetailFirebase } from "@/firebase/endpoints/movies";
import EsqueletoCard from "./EsqueletoCard";

function CardMovie({movie}){
  return(     
    <div key={movie?.id} onClick={()=>getMovieDetailFirebase()} className='mx-2 my-2 pb-1 px-1 shadow-lg'>
      <Link type="button"  href={"movies/"+movie?.id}>
        <img src={"https://image.tmdb.org/t/p/w500"+movie?.poster_path} className="w-44 h-66 lg:w-60 lg:h-72 "/>
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
          slidesToShow: 5,
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
          slidesToShow:2,
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
      <Slider {...settings} className="pt-1 w-10/12">
        {item.length?item.map((e)=>(
          <CardMovie movie={e}/> 
        )): [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((e)=>(
          <EsqueletoCard key={e}/>))}
      </Slider>
    </>
  )
}