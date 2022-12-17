import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'

const AddAuthor = () => {

  const navigate = useNavigate();

  const createName = (author) => {
    axios.post('http://localhost:8000/api/author/', author)
      .then((res) => {
        console.log(res)
        navigate(`/${res.data._id}`)
      })
      .catch(err=>console.log(err))
  }

  return (
    <div className="container text-center">
      <div className="container text-center">
        <Link to='/'>Go Home</Link>
      </div>

      <h1>Favorite Authors</h1>
      <h5>Add a new author:</h5>
      <AuthorForm onSubmitProp={createName} initialName=''/>
    </div>
  )
}

export default AddAuthor