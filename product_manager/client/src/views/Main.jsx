import React, {useState} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {
  const [products, setProducts] = useState([])

  return (
    <div>
      <ProductForm products={products} setProducts={setProducts}/>
      <hr/>
      <ProductList products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Main