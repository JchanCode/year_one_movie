import React,{ useState, useContext} from "react";
import YearOneContext from "../Context/YearOneContext";
import axios from "axios";
import styled from "styled-components";



const Form = styled.form`
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;


/* 
when input is empty / "please enter a movie name"
*/
        // var byId = {
        //     method: 'GET',
        //     url: 'https://series-movies-imdb.p.rapidapi.com/movie/details/tt0325980',
        //     headers: {
        //       'x-rapidapi-key': '36921ab046msh613fb88a1c6a7ccp1f8164jsnef4c99397fc8',
        //       'x-rapidapi-host': 'series-movies-imdb.p.rapidapi.com'
        //     }
        //   };


function Searchbar () {
    const { setSearchResult, setIsLoading } = useContext(YearOneContext)
    const [barOpened, setBarOpened] = useState();
    const [searchData, setSearchData] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchData(value);
    };

    const handleSubmit = async(e)=> {
        e.preventDefault();
        setIsLoading(true);
        const byName = {
            method: 'GET',
            url: `https://series-movies-imdb.p.rapidapi.com/movie/search/${searchData}`,
            headers: {
              'x-rapidapi-key': '36921ab046msh613fb88a1c6a7ccp1f8164jsnef4c99397fc8',
              'x-rapidapi-host': 'series-movies-imdb.p.rapidapi.com'
            }
        };
        const { data } = await axios.request(byName);
        console.log(data)
        setSearchResult(data);
        setIsLoading(false);
    };


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="search">Search Movie</label>
                <input type="text"
                       name="searchBar"
                       value={searchData}
                       id="search"
                       placeholder="Movie Name"
                       onChange={handleChange}/>
                <button type="submit">Search</button>
            </Form>
        </div>
    )
}

export default Searchbar;