import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm';
import { useNavigate } from "react-router-dom";

const Update = (props) => {

  const navigate = useNavigate();
  const {id} = props;
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products/' + id)
      .then(res => {
        setProduct(res.data)
        setLoaded(true);
      }
      )
      .catch(err => console.log(err))
    }, [id])

  const updateProduct = (product) => {
    axios.put(`http://localhost:8000/products/${id}/edit`, product)
      .then( res => console.log(res))
      .then(() => navigate(`/products/`));
  }

  return (
    <div className='app'>
      <h3>Update a Product</h3>
      { loaded  && (
        <>
          <ProductForm
            onSubmitProp = {updateProduct}
            initalTittle = {product.tittle}
            initalPrice= {product.price}
            initalDescription = {product.description}
          />
        </>
      )}
    </div>
  )
}

export default Update