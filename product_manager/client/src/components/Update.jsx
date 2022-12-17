import React, { useEffect, useState  } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Update = (props) => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [tittle, setTittle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products/' + id)
      .then(res => {
        setTittle(res.data.tittle);
        setPrice(res.data.price);
        setDescription(res.data.description);
      }
      )
      .catch(err => console.log(err))
    }, [id])

  const updateProduct = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8000/api/products/' + id, {
      tittle,
      price,
      description
    })
      .then( res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err))

  }

  return (
    <div className='app'>
      <h3>Update a Product</h3>
      <form onSubmit={updateProduct}>
        <div className='form-style'>
          <label>Tittle</label>
          <input
          type='text'
          value={tittle}
          onChange = {(e)=>setTittle(e.target.value)}
          ></input>
        </div>
        <br/>
        <div className='form-style'>
          <label>Price</label>
          <input
          type='number'
          value={price}
          onChange = {(e)=>setPrice(e.target.value)}
          ></input>
        </div>
        <br/>
        <div className='form-style'>
          <label>Description</label>
          <input
          type='text'
          value={description}
          onChange = {(e)=>setDescription(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit" value='Update'/>
        </div>
      </form>
    </div>
  )
}

export default Update