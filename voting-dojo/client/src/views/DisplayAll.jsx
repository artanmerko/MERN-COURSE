import './css/Display.css'
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayAll = () => {

  const [polls, setPolls] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/polls')
      .then((res )=> {
        console.log(res.data)
        setPolls(res.data)
      })
  },[])


  return (
    <div>
      <div className='link-create'>
        <Link to={'/polls/new'} className='create-btn'>Create your own Poll</Link>
      </div>
      <div className='polls'>
        <div className='top-polls'>
          <h3>Top 3 Polls</h3>
          {
            polls.map((poll, index)=>{
              return (
                <div key={index}>
                  <div>
                    <p>
                      <i className='fa'>&#xf200;</i>
                      <Link to={`/polls/${poll._id}`}>{poll.question}</Link>
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='recent-polls'>
          <div className='top-polls'>
          <h3>Recent Polls</h3>
          {
            polls.map((poll, index)=>{
              return (
                <div key={index}>
                  <div>
                    <p>
                      <i className='fa'>&#xf200;</i>
                      <Link to={`/polls/${poll._id}`}>{poll.question}</Link>
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </div>

    </div>
  )
}

export default DisplayAll