import React from "react"

function ImgBox(props){

    return(
        <img src={props.path} alt={props.detail}/>
        //input src={props.path} alt={props.detail}
    )

}



export default ImgBox;