import React from 'react'
import {useHistory} from 'react-router-dom'


 const  Wallpapercard=({movie})=> {
let history = useHistory();

   const handleClick = () => {
    console.log(movie.imdbID)
        history.push(`/movie/${movie.imdbID}`)
   }

        return (
           
 <div className="card-block h-100 col-md-3 col-sm-5 py-2 my-2 mx-2" onClick={handleClick}>
         <img className="card-img-top" style={{ maxHeight: '100%', maxWidth: '100%' }} 
                            src={movie.Poster} alt="movie poster" />
                            <div className="card-body">
                                <h5 className="card-title">Title: {movie.Title}</h5>
                                <p className="card-text">Year: {movie.Year}</p>
                                </div>
            </div>
        )
    }

export default  Wallpapercard
