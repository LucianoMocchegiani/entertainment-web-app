import React from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Loading =({color = "#000", size=60})=>{
  return (
    <div className="container flex justify-center items-center">
      <Spinner size={size} color={color} speed={1}/>
    </div>  
  )
}
export default Loading