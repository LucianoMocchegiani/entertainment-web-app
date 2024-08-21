import Icon from '@mdi/react';
import Image from 'next/image';
import MovieImage from '../../../public/movienigth.png'
import Link from 'next/link'
import { mdiPlay } from '@mdi/js';
export default function IconMovieNight(){
    return (
        <div className="w-auto h-auto flex justify-center items-center  relative p-5">
            <Link href="/#" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                <Image src={MovieImage} alt="Movie Night" className='rounded-full w-12 h-12 lg:w-16 lg:h-16'/>
                <div className="absolute top-1/2 left-1/2  max flex justify-center items-center rounded-full bg-white border-2 border-black">
                    <Icon path={mdiPlay} size={1} color='black' />
                </div>  
            </Link> 
        </div>
    )
}

