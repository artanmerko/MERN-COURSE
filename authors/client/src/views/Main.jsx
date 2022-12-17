import React, { useState } from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const Main = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/author/')
      .then((res)=>{
        console.log(res.data)
        setAuthors(res.data)
      })
  }, [])

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  }

  return (
    <div className="container text-center">
      <h1>Favorite Authors</h1>
      <Link to='/new/'>Add New Author</Link>
      <p>We have qoutes by: </p>

      <table className="table table-light mt-3">
        <thead className="table table-dark">
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {
            authors.map((author, index)=>{
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/${author._id}`} key={index}>
                      {author.name}
                    </Link>
                  </td>
                  
                  <td>
                    <div className="d-inline-block">
                      <Link to={`/edit/${author._id}`} key={index} className="btn btn-success">
                        Edit
                      </Link>
                    </div>

                    <div className="d-inline-block">
                      <DeleteButton
                        authorId={author._id}
                        successCallback={() => removeFromDom(author._id)}
                      />
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Main