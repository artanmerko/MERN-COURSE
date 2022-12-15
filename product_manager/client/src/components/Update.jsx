import React, { useEffect, useState  } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import ProductForm from './ProductForm';
import { useNavigate } from "react-router-dom";
import DeleteButton from './DeleteButton';

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
    axios.put('http://localhost:8000/api/products/' + id, product)
      .then( res => console.log(res))
      .catch(err => console.log(err))
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
          <DeleteButton
          personId={product._id}
          successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  )
}

export default Update