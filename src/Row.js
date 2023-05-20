
import React, { useState, useEffect } from 'react'
import axios from "./axios";


const base_url= "https://image.tmdb.org/t/p/original"

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
           const request = await axios.get(fetchUrl) 
           console.log(request.data.results);
           setMovies(request.data.results)
           return request;
        }
        fetchData();
    },[fetchUrl])
  return (
    <>
    <div>
    <h3  className='title'>{title}</h3>
    <div className='row_posters'>
        {movies.map(movie=>{
            return <img 
            key={movie.id} 
            className='row_poster $ {isLargeRow && "row_posterLarge"}'
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} />
        })}
    </div>
    </div>
    </>
  )
}

export default Row;