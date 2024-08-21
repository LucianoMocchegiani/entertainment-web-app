import React from "react";
import { Spinner } from "react-activity";
export default function EsqueletoCard({key}){
  return(     
      <div key={key} type="button" className="w-32 h-66 lg:w-56 lg:h-80 border border-white flex justify-center items-center" >
        <Spinner size={30} color={'white'} speed={1}/>
      </div>
  )
}
