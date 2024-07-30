import Icon from '@mdi/react';
import Link from 'next/link'
import { mdiPlay } from '@mdi/js';
export default function IconMovieNight(){
    return (
        <div className="w-auto h-auto flex justify-center items-center bg-black">
            <Link href="/#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="h-3/4 flex justify-center items-center rounded-full bg-white">
                <Icon path={mdiPlay} size={2} color='black' className='ml-1'/>
            </div>
            </Link> 
        </div>
    )
}

