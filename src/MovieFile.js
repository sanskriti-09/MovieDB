import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './App.css';
const API_IMG = "https://image.tmdb.org/t/p/w500/"

const MovieF = ({title, poster_path, release_date, vote_average, overview})=>{

    // const [show, setShow]=useState(false);
    // const handleShow=()=>setShow(true);
    // const handleClose=()=>setShow(false);

    return(<div>        
        <h3>{title}</h3>
        <img src={API_IMG+poster_path} className="posters"></img>
        {/* <p>{overview}</p>       */}
        
        { <button className="view"> <h4>VIEW MORE</h4>
            </button> }

</div>)

    
}
export default MovieF;