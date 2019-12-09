import React from 'react'


 const  Flagcard=({country})=> {
        return (<div className="card-block h-100 col-md-3 col-sm-5 py-2 pl-3 my-2 mx-2">
                <img className="card-img-top" style={{ maxHeight: '40%', maxWidth: '40%' }} 
                        src={country.flag} alt="flag poster" />
                            <div className="card-body ">
                                <h5 className="card-title">Name: {country.name}</h5>
                                <p className="card-text">Capital: {country.capital}</p>
                                <p className="card-text">Region: {country.region}</p>
                                <p className="card-text">Population: {country.population}</p>
                                </div>
            </div>
        )
    }

export default  Flagcard
