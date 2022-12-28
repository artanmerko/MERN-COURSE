import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { personId, successCallback } = props;
    
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}
export default DeleteButton;