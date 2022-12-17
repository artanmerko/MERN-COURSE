import axios from 'axios';
import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../css/ProductList.css'

const ProductList = (props) => {

  const {removeFromDom, products, setProducts} = props;

  const deleteProduct = (productId) =>{
    axios.delete('http://localhost:8000/api/products/' + productId)
      .then( res => {
        removeFromDom(productId)
      })
      .catch(err=>console.log(err))
  }

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
      .then((res)=>{
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(err=>console.log(err))
  },[])

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
              <button className='btn' onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
              </button>

            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList