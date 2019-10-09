import React from "react"
import ImgBox from "../Atoms/ImgBox"


function ImgCard(props){

    return(
        <div>
            <ImgBox        key={props.hdurl} 
            path={props.path} 
            detail={props.detail} 
            />
            <p>{props.date}</p> 
        
        </div>
    )
}


export default ImgCard