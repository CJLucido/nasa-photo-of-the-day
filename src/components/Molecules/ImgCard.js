import React from "react"
import ImgBox from "../Atoms/ImgBox"
import styled from "styled-components";

const StyledImgCard = styled.div`
        border: 5px dashed white;
        background-color: black;
        color: white;
        display:flex;
        align-items: center;
        height: fit-content;
        flex-direction: column

        h1{
            border: 5px dashed yellow;
            width: 50%;
            height: 50%;
            font-size: 1rem;
        }

        p {
            border: 5px dashed red;
        }
`;

function ImgCard(props){

    return(
        // <div className="Img-card-container">
        // <h1 className="explanationPara">{props.info}</h1>
        //     <ImgBox        
        //     key={props.hdurl} 
        //     path={props.path} 
        //     detail={props.detail} 
        //     />
        //     <p className="dateParagraph">{props.date}</p> 
        
        // </div>

        <StyledImgCard>
            <h1 >{props.info}</h1>
            <ImgBox        
                key={props.hdurl} 
                path={props.path} 
                detail={props.detail} 
                />
            <p>{props.date}</p> 
            
        </StyledImgCard>
    )
}


export default ImgCard