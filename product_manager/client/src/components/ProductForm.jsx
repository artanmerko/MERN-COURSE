import React,{useState} from 'react';
import './ProductForm.css';
import axios from 'axios'

const ProductForm = (props) => {
  const {products, setProducts} = props;
  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/products/new',{
      tittle,
      price,
      description
    })
      .then(res => {
        console.log(res)
        console.log(res.data)
        setProducts([...products, res.data]);
        setTittle('');
        setPrice('');
        setDescription('');
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='app'>
      <h3>Product Manager</h3>
      <form onSubmit={onSubmitHandler}>
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
          <input type="submit" value='Create'/>
        </div>
      </form>
    </div>
  )
}

export default ProductForm