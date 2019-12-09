import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { useParams } from 'react-router-dom'
import { getMovie } from '../API/wallpaperApi'

const Moviedetails = () => {
  const { imdbID } = useParams();

  const [connect, setConnect] = useState({
    loading: false,
    error: false,
    success: false
  });


  const [movie, setMovie] = useState({})

  const { success } = connect

  useEffect(() => {
    setConnect({ ...connect, loading: true, error: false, success: false })
    getMovie(imdbID)
      .then(data => {

        const { Response } = data;

        if (Response === "True") {
          console.log(data)
          setMovie(data);
          setConnect({ ...connect, loading: false, error: false, success: true })
        } else {
          setConnect({ ...connect, loading: false, error: true, success: false })
        }
      })
  }, [])
  return (
    <Layout>
   
      {success ?

        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="sam">    <img className="card-img-top" style={{ maxHeight: '80%', maxWidth: '80%' }} src={movie.Poster} alt="movie poster" /></div>
            </div>
            <div className="col-6 ">
              <div className="sam">
              <h5 className="card-title">Title: {movie.Title}</h5>
                                <p className="card-text">rated:  {movie.Rated}</p>
                                <p className="card-text">released: {movie.Released}</p>
                                <p className="card-text">Genre: {movie.Genre}</p>
                                <p className="card-text">Runtime: {movie.Runtime}</p>
                                <p className="card-text">Director: {movie.Director}</p>
                                <p className="card-text">Writer: {movie.Writer}</p>
                                <p className="card-text">Actor: {movie.Actor}</p>
                                <p className="card-text">Plot: {movie.Plot}</p>
                                <p className="card-text">Language: {movie.Language}</p>
                                <p className="card-text">County: {movie.Country}</p>
                                <p className="card-text">imdbRating: {movie.imdbRating}</p>
                                <p className="card-text">Production: {movie.Production}</p>
                                
                                
                               
                                
                
                 </div>
            </div>
          </div>
          </div>
          : ""}
      </Layout>
    )
  }
export default Moviedetails