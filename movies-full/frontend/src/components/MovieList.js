import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const MovieList = () => {

    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllMovies')
            .then((res)=>{
                console.log(res.data)
                setMovies(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
    return (
        <div>
            {
                movies.map((movie,index)=>{
                    return <div key={index}>
                        <Link to={`/list/${movie._id}`}>{movie.title}</Link>
                        <h5>{movie.genre}</h5>
                        <h5>{movie.rate}</h5>
                        <img src={movie.image} style={{width:"20%", height:"20%"}}/>
                    </div>
                })
            }
        </div>
    )
}

export default MovieList