import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Edit = () => {

    const [movies,setMovies] = useState({
        title: '',
        genre: '',
        rate: '',
        image: ''
    })
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getMovie/${id}`)
        .then((res)=>{
            console.log(res.data)
            setMovies(res.data)
        })
    },[])
    function onChangeHandler(e){
        setMovies({
            ...movies,
            [e.target.name]: e.target.value
        })
    }

    function submitHandler(e){
        e.preventDefault()
        axios.put(`http://localhost:8000/api/editMovie/${id}`,{
            ...movies
        })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
    return (
        <div className='col-6 mx-auto'>
            <form onSubmit={submitHandler}>
                <label className='form-label'>Title:</label>
                <input type='text' className='form-control' name='title' value={movies.title} onChange={onChangeHandler}/>
                <label className='form-label'>Genre:</label>
                <select className='form-control'  name='genre' value={movies.genre} onChange={onChangeHandler}>
                    <option>Select a genre:</option>
                    <option value='Drama'>Drama</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Action'>Action</option>
                </select>
                <label className='form-label'>Rating:</label>
                <select className='form-control' name='rate' value={movies.rate} onChange={onChangeHandler}>
                    <option>Select a rate:</option>
                    <option value='rate1'>rate1</option>
                    <option value='rate2'>rate2</option>
                    <option value='rate3'>rate3</option>
                </select>
                <label className='form-label'>Image:</label>
                <input type='text' className='form-control' name='image' value={movies.image} onChange={onChangeHandler}/>
                <button className='btn btn-success mt-5'>EDIT</button>
            </form>
        </div>
    )
}

export default Edit