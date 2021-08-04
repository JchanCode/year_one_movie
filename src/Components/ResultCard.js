import React from 'react'
import styled from "styled-components";


const Poster = styled.img`
    height: 300px;
    border-radius: 7px;
`



//set default img "no pic"
const ResultCard = ({movieId, posterUrl, title}) => { 
 
    

    return (
        <div>
            <a href="#"> 
                <Poster src={posterUrl} alt="poster"/>                
                <p>{title}</p>
            </a>
        </div>
    )
}


export default ResultCard;