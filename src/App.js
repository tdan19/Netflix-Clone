import React from 'react'
import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div>
   <Row title=" NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} 
   isLargeRow
   />  
   <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> 
   <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>  
   <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> 
   <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>  
   <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} /> 
   <Row title=" Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>  
   <Row title="Documentaries Movie" fetchUrl={requests.fetchDocumentaries} />  
    </div>
  )
}

export default App
