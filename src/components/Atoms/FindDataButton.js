import React from "react";
import styled from "styled-components";

const StyledDataButton = styled.button`
        padding: 2vh;
        margin: 0;
        background-color: ${props => (props.primary ? "#C8C7CB" : "#788287")};
        color: ${props => (props.primary ? "#788287" : "#C8C7CB")};
        font-size: 4vh;
        border-radius: 5%;
        &:hover {
            background: ${props => (props.primary ? "#788287" : "#C8C7CB")};
            color: ${props => (props.primary ? "#C8C7CB" : "#788287")};
            border: ${props =>
              props.primary ? "2px solid #788287" : "2px solid #C8C7CB"};
          }
`


function FindDataButton(props){


    return(
        <StyledDataButton primary>Find It!</StyledDataButton>
        //input onClick=(()=>{props.findDate})
    )

} 


export default FindDataButton