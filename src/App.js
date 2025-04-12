import React from 'react'
import './App.css';
import Row from './Components/Row/Row';
import requests from './axios/requests';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='App'>
      <Nav/>
   <Banner/>
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
   <Footer/>
    </div>
    
  )
}

export default App
