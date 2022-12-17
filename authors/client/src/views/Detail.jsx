import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton'

const Detail = (props) => {

  const [author, setAuthor] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:8000/api/author/'+ id )
    .then(res => {
      console.log(res.data)
      setAuthor(res.data)
    })
    .catch(err => console.log(err))
  },[id])

  return (
    <div className="container mt-5 text-center">
      <h4 className="display-3">{author.name}</h4>
      <div className="d-inline-flex mt-2">
        <Link to={`/author/edit/${author._id}`} className="btn btn-primary">Update</Link>
        <DeleteButton authorId={author._id} successCallback={() => navigate('/')} />
      </div>
      <div className="display-8">
        <Link to='/' className="btn btn-secondary mt-3 mr-1">Go Home</Link>
      </div>
    </div>
  )
}

export default Detail