import React from 'react';

import './App.css'
import Banner from './Banner';
import requests from './requests';
import Row from './Row'
import Nav from './Nav';

function App() {
  return(
    <div className='App'>
<Banner/>
<Nav/>
<Row title="NETFLIX 🎦ORGINAL" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
<Row title=" 📈Trending " fetchUrl={requests.fetchTrending}/>
<Row title=" 💕Top Rated" fetchUrl={requests.fetchTopRated}/>
<Row title=" 👨‍🎤Action Movies" fetchUrl={requests.fetchActionMovies}/>
<Row title=" 😅Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
<Row title=" 😈Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
<Row title="❤️Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
<Row title="📃Documetaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;