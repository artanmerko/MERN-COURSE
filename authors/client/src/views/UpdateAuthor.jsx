import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const UpdateAuthor = (props) => {

  const {id} = useParams();
  const [author, setAuthor] = useState([ ]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/author/${id}`)
      .then((res)=>{
        console.log(res.data);
        setAuthor(res.data);
        console.log(res.data);
        setLoaded(true);
      })
      .catch(err=>console.log(err))
  },[id])

  const updateName = (name) => {
    axios.put(`http://localhost:8000/api/author/${id}`, name)
      .then((res) => {
        navigate('/')
      })
      .catch(err=>console.log(err))
  }

  return (
    <div className="container text-center">
      <div className="container text-left">
        <Link to="/">Home</Link>
      </div>
      <h1>Favorite Authors</h1>
      <h5>Edit author:</h5>
      {loaded && (
        <AuthorForm onSubmitProp = {updateName} initialName = {author.name}/>
      )}
    </div>
  )
}

export default UpdateAuthor