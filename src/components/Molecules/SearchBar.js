import React from "react"
import FindDataButton from "../Atoms/FindDataButton"
import FindDataInput from "../Atoms/FindDataInput"
import styled from "styled-components";


const StyledSearchBar = styled.div`
        display:flex;
        align-items: center;
        width: 100%;
        background-color: black;
        color: white;
        border: 5px dashed darkblue

        h3{
            font-size: 3rem;
            margin: 3rem;
        }

`; //////////////////END of Styled Search Bar---------------------


function SearchBar(props){

    return(
        // <div className="search-bar">
        //     <h3 className="search-label">Search:</h3>
        //     <FindDataInput className="search-input"/>
        //     <FindDataButton/>
        // </div>
        <StyledSearchBar>
            <h3 >Search:</h3>
            <FindDataInput/>
            <FindDataButton/>
        </StyledSearchBar>

    )
}

export default SearchBar