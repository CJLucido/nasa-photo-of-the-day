import React from "react"

function ImgBox(props){

    return(
        <div className="Img-box-container">
        <img src={props.path} alt={props.detail}/>
        </div>
        //input src={props.path} alt={props.detail}
    )

}



export default ImgBox;