import React, { useState } from 'react'
const ProductForm=( props) => {
    const { initialTitle, initialPrice,initialDesc, onSubmitProp } = props;
    const [title,setTitle] = useState(initialTitle);
    const [price,setPrice] = useState(initialPrice);
    const [desc,setDesc] = useState(initialDesc);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price,desc});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br />
                <input
                type="text"
                name="title" value={title}
                onChange={(e) => { setTitle(e.target.value) }} />
            </p>
            <p>
                <label>Price: </label><br />
                <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => { setPrice(e.target.value) }} />
            </p>
            <p>
                <label>Description: </label><br />
                <input
                type="text"
                name="desc"
                value={desc}
                onChange={(e) => { setDesc(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default ProductForm;
