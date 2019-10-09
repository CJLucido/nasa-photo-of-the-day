import React from "react"
import ImgBox from "../Atoms/ImgBox"


function ImgCard(props){

    return(
        <div className="Img-card-container">
        <h1 className="explanationPara">{props.info}</h1>
            <ImgBox        
            key={props.hdurl} 
            path={props.path} 
            detail={props.detail} 
            />
            <p className="dateParagraph">{props.date}</p> 
        
        </div>
    )
}


export default ImgCard