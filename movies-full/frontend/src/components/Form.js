import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [movies,setMovies] = useState({
        title: '',
        genre: '',
        rate: '',
        image: ''
    })
    const navigate = useNavigate()
    const [beErrors,setBeErrors] = useState('')
    function onChangeHandler(e){
        setMovies({
            ...movies,
            [e.target.name]: e.target.value
        })
    }

    function submitHandler(e){
        e.preventDefault()
            axios.post('http://localhost:8000/api/createMovie',{
            ...movies
            })
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err.response.data.err.errors.title.kind)
                setBeErrors(err.response.data.err.errors.title.kind)
            })
    }

    return (
        <div className='col-6 mx-auto'>
            <form onSubmit={submitHandler}>
                <label className='form-label'>Title:</label>
                <input type='text' className='form-control' name='title' onChange={onChangeHandler}/>
                {beErrors === 'unique' ? <span style={{color:'red'}}>*TITLE IS NOT UNIQUE</span>: null}<br/>
                <label className='form-label'>Genre:</label>
                <select className='form-control'  name='genre' onChange={onChangeHandler}>
                    <option>Select a genre:</option>
                    <option value='Drama'>Drama</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Action'>Action</option>
                </select>
                <label className='form-label'>Rating:</label>
                <select className='form-control' name='rate' onChange={onChangeHandler}>
                    <option>Select a rate:</option>
                    <option value='rate1'>rate1</option>
                    <option value='rate2'>rate2</option>
                    <option value='rate3'>rate3</option>
                </select>
                <label className='form-label'>Image:</label>
                <input type='text' className='form-control' name='image' onChange={onChangeHandler}/>
                <button className='btn btn-success mt-5'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form