import React from 'react'
import styled from "styled-components";


const ResultCard = ({movieId, poster, title}) => { 
 
    

    return (
        <div>
            <p>{title}</p>
            <img src={poster} alt="poster"/>
        </div>
    )
}


export default ResultCard;