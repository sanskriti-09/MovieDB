import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import MovieF from './MovieFile';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1eece11314ca8cc7e7afa6f416a23242";
const API_SEARCH = "https://api.themoviedb.org/3/search/company?api_key=1eece11314ca8cc7e7afa6f416a23242&query";

function App() {

  const [movies, setMovies]=useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [query, setQuery]=useState('');

  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results)
    })
  },[])

  return (
    <div className="div1">
      <nav className="navbar">
        <div className="navbar__container">
      
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a href="#home" className="navbar__links" id="home-page">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#gallery" className="navbar__links" id="gallery-page">Gallery</a>
                </li>
                {/* <li><input type="text" id="search" className='searchbar' placeholder='Search Movie' value={query}></input></li> */}
                <li><div><button className='searchbtn'><b>SEARCH</b></button></div></li>
            </ul>
        </div>
    </nav>

    {/* search filter */}

     {/* <div className="s">
      <input type="text" placeholder="Search Movies" onChange={(event)=>{
        setSearchTerm(event.target.value);
      }}></input>
      {
        API_SEARCH.filter((val)=>{
          if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){return val}
        }).map((val, key)=>{
          return(
            <div className='user' key={key}>
              <p>{val.title}</p>
            </div>
          );
        })
      }
    </div> */}
    
      <div className="div2">
     {
      movies.map((movieReq)=><MovieF key={movieReq.id} {...movieReq}/>)
     }
     </div>
    </div>
  );
}


export default App;
