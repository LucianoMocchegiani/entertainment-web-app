import Icon from '@mdi/react';
import { mdiGoogleChrome } from '@mdi/js';




const WebButton = ({}) => {

    return (    
        <div className='w-72 h-14 bg-white rounded-xl flex justify-between items-center px-2'>
            <p className='text-lg font-bold'>Ingresar desde la web</p>
            <Icon path={mdiGoogleChrome} size={2}  color="#4285F4" className='mb-2 ml-1'/>
        </div>
    ) 
}

export default WebButton