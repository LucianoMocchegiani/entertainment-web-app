import React from "react";
import { Spinner } from "react-activity";
export default function EsqueletoCard({key}){
  return(     
    <div key={key} className='mx-2 my-2 pb-1 px-1 shadow-lg'>
      <div type="button" className="w-66 h-80 border border-white flex justify-center items-center">
        <Spinner size={30} color={'white'} speed={1}/>
      </div>
    </div>
  )
}
