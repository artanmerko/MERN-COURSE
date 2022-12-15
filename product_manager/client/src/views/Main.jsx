import React, {useState, useEffect} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import axios from 'axios'

const Main = () => {

  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
      .then((res)=>{
        setProducts(res.data)
        setLoaded(true)
      })
  },[products])

  const removeFromDom = (productId) => {
    setProducts(products.filter(product => product._id !== productId))
  }

  const createProduct = (product) => {
    axios.post('http://localhost:8000/api/products/new', product)
      .then(res => {
        console.log(res.data)
        setProducts(product => [...products, res.data]);
      })
    }
  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        initialTittle=''
        initialPrice=''
        initialDescription=''
      />
      <hr/>
      { loaded && (
      <ProductList products={products} removeFromDom={removeFromDom}/>
    )}
    </div>
  )
}

export default Main