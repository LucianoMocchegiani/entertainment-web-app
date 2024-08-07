
import Popcorn from '../../../public/popcorn-y.png'
import Image from 'next/image';

export default function PopcornBg() {
  return (
    <>
    <div className='flex w-full h-4/4 fixed invisible lg:visible z-0'> 
      <div className="flex flex-col w-2/4  items-end rotate-180">
        <Image src={Popcorn} className=""  width={200}/>
        <Image src={Popcorn} className=""  width={200}/>
      </div>
      <div className="flex flex-col w-2/4 items-end">
        <Image src={Popcorn} className=""  width={200}/>
        <Image src={Popcorn} className=""  width={200}/>
      </div>
    </div>
    </>
  );
}
