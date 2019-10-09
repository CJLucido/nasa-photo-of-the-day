import React from "react"

function ImgBox(props){

    return(
        <div >
        <img className="Img-box-container" src={props.path} alt={props.detail}/>
        </div>
        //input src={props.path} alt={props.detail}
    )

}



export default ImgBox;