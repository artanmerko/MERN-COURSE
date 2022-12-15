import React, {useState, useEffect} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import axios from 'axios'

const Main = (props) => {

  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
      .then((res)=>{
        setProducts(res.data)
        setLoaded(true)
      })
      .catch(err=>console.log(err))
  },[])

  const removeFromDom = (productId) => {
    axios.delete('http://localhost:8000/api/products/' + productId)
    .then(res => {
      console.log(res)
      console.log(res.data)
    setProducts(products.filter(product=>product._id !== productId))
    })
    .catch((err)=>console.log(err))
  }

  const createProduct = (productParam) => {
    axios.post('http://localhost:8000/api/products/new', productParam)
      .then(res => {
        console.log(res)
        console.log(res.data)
        setProducts([...products, res.data]);
      })
      .catch(err => console.log(err))
    }
  return (
    <div>
      <ProductForm onSubmitProp={createProduct} InitialTittle='' initialPrice='' initialDescription='' />
      <hr/>
      {loaded && <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main