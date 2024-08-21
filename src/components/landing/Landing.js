import LoadingStarting from "../login/LoadingStarting"
import Responsive from '../../../public/responsivemovie.png'
import Image from 'next/image';
import DowloadAndroid from './Dowload';
import WebButton from "./Web";

const Landing = ({}) => {

    return (
        <>  
            <LoadingStarting/>
            <div className='w-full h-[450px] flex flex-wrap justify-center items-center'>
                {/* <Image src={MovieImage} width={400}  alt="Movie Night"/> */}
                <div className="flex flex-col justify-around items-center w-8/12 h-2/4 mb-10 lg:w-4/12 ">
                    <h1 className="text-white text-xl font-extrabold">MovieNigth</h1>
                    <h2 className="text-white text-lg font-medium">Elige tu pelicula o serie!</h2>
                    <DowloadAndroid/>
                    <WebButton/>
                </div>
                <Image src={Responsive} className=" w-[350px] lg:w-[500px] xl:w-[600px]"  alt="Movie Night"/>
            </div>
        </>
    ) 
}

export default Landing
