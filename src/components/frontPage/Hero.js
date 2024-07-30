"use client"
import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';
import { mdiPlayOutline } from '@mdi/js';

const Hero = ({ movie, type}) => {
	return (
		<div className='absolute w-full h-full flex flex-col items-center justify-end bottom:8px'>
			<div className='w-9/10 mt-3 flex flex-row justify-center items-center'>
				{movie&&
				<Link className='flex flex-row bg-white w-36 h-8 rounded-sm items-center justify-center' type="button"  href={type==='series'?"series/"+movie?.id:"movies/"+movie?.id}>
					<Icon path={mdiPlayOutline} size={2} color='black' />
					<p className='text-ls font-bold pl-2 mr-5 text-black'>Play</p>
				</Link>}
			</div>
			<div className='flex flex-wrap items-center justify-center mt-4 w-80 pb-24'>
                    {
                        movie?.genres?.map((genre, i) => {
                            return (
								<>
									<div className='color-white pl-2 text-sm text-white' key={genre.id+i}>{genre.name}</div>
									{(i+1)!=movie?.genres?.length?<div className='w-1 h-1 bg-white mr-2 ml-2 rounded-sm text-white' key={i}></div>:null}
								</>
                            )
                        })
                    }
            </div>
		
		</div>
	)
}

export default Hero
