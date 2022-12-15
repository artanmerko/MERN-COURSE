import React,{useState} from 'react';
import '../css/ProductForm.css';

const ProductForm = (props) => {

  const {initialTittle, initialPrice, initialDescription, onSubmitProp} = props;

  const [tittle, setTittle] = useState(initialTittle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({tittle, price, description});
    setTittle("")
    setPrice("")
    setDescription("")
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