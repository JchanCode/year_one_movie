import React, { useContext } from "react";
import ResultCard from './ResultCard';
import Loader from './Loader'
import YearOneContext from '../Context/YearOneContext'
import { v4 as uuidv4 } from 'uuid';


/* 
loading bar
no result

*/
function ResultBox () {
    const {searchResults, isLoading} = useContext(YearOneContext)


    return (
        <>        
            { isLoading && <Loader /> }
            { searchResults && searchResults.map(r=>(
                <ResultCard key={uuidv4()} 
                            movieId={r.movieid} 
                            poster={r.moviePosterUrl}
                            title={r.movieTitle}  />
            ))}
        </>

    )

}

export default ResultBox;