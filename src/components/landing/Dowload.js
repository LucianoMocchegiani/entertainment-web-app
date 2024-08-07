
import Icon from '@mdi/react';
import { mdiAndroid } from '@mdi/js';

const DowloadAndroid = ({}) => {

    return (    
            <div className='w-72 h-14 bg-white rounded-xl flex justify-between items-center px-2'>
                <p className='text-lg font-bold'>Descargar para android</p>
                <Icon path={mdiAndroid} size={2} color='#3DDC84' className='mb-2 ml-1'/>
            </div>
    ) 
}

export default DowloadAndroid
