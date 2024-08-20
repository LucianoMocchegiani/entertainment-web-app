import React from "react";
import { Spinner } from "react-activity";
export default function EsqueletoCard({key}){
  return(     
      <div key={key} type="button" className="w-56 h-80 border border-white flex justify-center items-center" >
        <Spinner size={30} color={'white'} speed={1}/>
      </div>
  )
}
