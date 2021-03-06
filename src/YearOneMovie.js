import React, { useState } from "react";
import { Route } from "react-router-dom";
import YearOneContext from "./Context/YearOneContext";
import Searchbar from './Components/Searchbar';
import ResultBox from "./Components/ResultBox";


/* 

give setIsLoading to SearchBar



*/
const YearOneMove = () => {
    const [ searchResults, setSearchResult ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);

    return (
        <YearOneContext.Provider value={{searchResults, setSearchResult, isLoading, setIsLoading}}>
            <Searchbar/>            
            <Route>
                <ResultBox />                   
            </Route>      
        </YearOneContext.Provider>
    )
}



export default YearOneMove;