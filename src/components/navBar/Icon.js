import Icon from '@mdi/react';
import Image from 'next/image';
import MovieImage from '../../../public/movienigth.png'
import Link from 'next/link'
import { mdiPlay } from '@mdi/js';
export default function IconMovieNight(){
    return (
        <div className="w-auto h-auto flex justify-center items-center  relative ml-10">
            <Link href="/#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src={MovieImage} width={70} height={70} alt="Movie Night" className='rounded-full'/>
                <div className="absolute top-1/2 left-1/2  max flex justify-center items-center rounded-full bg-white border-2 border-black">
                    <Icon path={mdiPlay} size={1} color='black' />
                </div>
            </Link> 
        </div>
    )
}

