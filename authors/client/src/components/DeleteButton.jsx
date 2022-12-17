import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

  const {authorId, successCallback} = props;

  const deleteName = (e) => {
    axios.delete(`http://localhost:8000/api/author/` + authorId)
      .then((res) => {
        successCallback();
      })
  }

  return (
    <div>
      <>
        <button onClick={deleteName} className='btn btn-danger mr-5'>Delete</button>
      </>
    </div>
  )
}

export default DeleteButton