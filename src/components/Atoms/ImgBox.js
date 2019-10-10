import React from "react";
import styled from "styled-components";

const StyledImgBox = styled.div`
        display: flex;
        justify-content: center;
        background-color: black;
        text-align: center
       

        img{
            object-fit: cover;
        }

`


function ImgBox(props){

    return(
        // <div >
        // <img className="Img-box-container" src={props.path} alt={props.detail}/>
        // </div>
        //input src={props.path} alt={props.detail}

        <StyledImgBox>
            <img src={props.path} alt={props.detail}/>
        </StyledImgBox>
    )

}



export default ImgBox;