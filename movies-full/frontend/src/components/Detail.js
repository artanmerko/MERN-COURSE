import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Detail = () => {

    const {id} = useParams()
    const [movie,setMovie] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getMovie/${id}`)
            .then((res)=>{
                console.log(res.data)
                setMovie(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
    function deleteHandler(){
        axios.delete(`http://localhost:8000/api/deleteMovie/${id}`)
            .then((res)=>{
                console.log(res)
                navigate('/list')
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <h1>{movie.genre}</h1>
            <h1>{movie.rate}</h1>
            <img src={movie.image} style={{width:"20%", height:"20%"}}/><br/>
            <Link to={`/edit/${movie._id}`}>EDIT MOVIE</Link>
            <button onClick={deleteHandler}>DELETE MOVIE</button>
        </div>
    )
}

export default Detail