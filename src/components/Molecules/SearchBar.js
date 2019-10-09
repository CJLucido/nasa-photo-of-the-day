import React from "react"
import FindDataButton from "../Atoms/FindDataButton"
import FindDataInput from "../Atoms/FindDataInput"

function SearchBar(props){

    return(
        <div className="search-bar">
            <h3 className="search-label">Search:</h3>
            <FindDataInput className="search-input"/>
            <FindDataButton/>
        </div>

    )
}

export default SearchBar