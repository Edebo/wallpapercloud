import React from 'react'
import { useHistory } from "react-router-dom"



const Card = ({ Movies }) => {
    let history = useHistory()
    const handlecardclick = () => {
        console.log('i was clicked', movie.imdbID)
        history.push(`/movies/${Movie.imdbID}`)
    }


    return (<div className="card-block h-100 col-md-3 col-sm-5 py-2 my-2 mx-2" onClick={handlecardclick} >
        <img className="card-img-top"
            style={ maxHeight: '100%',maxWidth: '100%'}}
            src={movie.Poster}
        alt="movie poster" />
        <div className="card-body" >
            <h5 className="card-title" > Title: {movie.Title} </h5>
            <p className="card-text" > Year: {movie.year} </p>
        </div>
    </div>
    )
}
export default Card