import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/ProductList.css'
import DeleteButton from './DeleteButton';

const ProductList = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
      .then((res)=>{
        setProducts(res.data)
      })
      .catch(err=>console.log(err))
  },[])

  const removeFromDom = (productId) => {
    setProducts(products.filter(product=>product._id !== productId))
  }

  return (
    <div>
      {
        products.map((product, index)=>{
          return (
            <div key={index} className='list'>

              <Link to={`/products/${product._id}`}>
                <h4 className='title'>{product.tittle}</h4>
              </Link>

              <Link to={`/products/edit/${product._id}`}>
                <h4>Edit</h4>
              </Link>

              <DeleteButton
                productId = {product._id}
                successCallback = {()=>removeFromDom(product._id)}
              />

            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList