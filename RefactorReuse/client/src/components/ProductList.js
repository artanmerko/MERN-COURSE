import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProduct(res.data));
    }, [])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }
    return (
        <div>
            {product.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/product/" + product._id}>
                            {product.title}, {product.price},{product.desc}
                        </Link>
                        |
                        <Link to={"/product/" + product._id + "/edit"}>
                            Edit
                        </Link>
                        |
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    )
}
export default ProductList;