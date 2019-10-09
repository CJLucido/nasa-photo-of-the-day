import React from "react"
import ImgBox from "../Atoms/ImgBox"


function ImgCard(props){

    return(
        <div className="Img-card-container">
        <h1>{props.info}</h1>
            <ImgBox        
            key={props.hdurl} 
            path={props.path} 
            detail={props.detail} 
            />
            <p className="Img-box-container">{props.date}</p> 
        
        </div>
    )
}


export default ImgCard