const omdb= 'http://www.omdbapi.com/?apikey=30a86ccd&s=man'
const single = 'http://www.omdbapi.com/?apikey=30a86ccd&plot=full'
const flag ='https://restcountries.eu/rest/v2/all'

export const getWallpaper = () => {
    return fetch (omdb)
      .then (Response => Response.json())
} 
//to get a single movie 
export const getMovie = (imdbID) =>{
console.log(imdbID)
return fetch(`${single}&i=${imdbID}`)
      .then(response=>response.json())
}

export const getFlag=( ) =>{
      return fetch (flag)
      .then (Response =>Response.json())
}
  