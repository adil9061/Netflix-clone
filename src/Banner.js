import React, {useEffect, useState } from 'react'
import axios from "./axios"
import requests from './requests'
import './Banner.css'




function Banner (){
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
           const request = await axios.get(requests.fetchNetflixOriginals);
 
           console.log(request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]);
           setMovies(
            request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]
           )
           setInterval(()=>{
            setMovies(
                request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]
               )
           },3000)
           return request;
        }
        fetchData();
    },[])
console.log(movies);


function truncate(str,n){
    return str?.length > n ? str.substr(0,n - 1)+"...":str;
}




  return (
   <header className='banner' style={{
    backgroundSize:"100% 100%",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
    backgroundPosition:"cover",
    backgroundRepeat:"no-repeat"
   }}>

    <div className='banner_contents'>
        <h1 className='banner_title'>
            {movies?.title || movies?.name || movies?.orginial_name}

        </h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
            {truncate(movies?.overview,150)}

        </h1>
    </div>


   </header>
  )
}

export default Banner;