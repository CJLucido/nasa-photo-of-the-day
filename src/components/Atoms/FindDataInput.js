import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
       background-color: grey;
       padding: 2vh;
       margin-right: 3vw;
       border-radius: 22px;

       input{
            background-color: purple;
            color: white;
       }

`



function FindDataInput(props) {

    

    return(
        <StyledInput>
            <input size="35" type="text" name="search" className="search-input"></input>
        </StyledInput>
    )
}


export default FindDataInput