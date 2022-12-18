import '../views/css/Display.css'
import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DisplayOne = () => {

  const [poll, setPolls] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios.get('http://localhost:8000/polls/' + id)
      .then((res) => {
        console.log(res.data)
        setPolls(res.data)
      })
        .catch(err => console.log(err))
  }, [id])

  const pollOptions  = [
    {
        className: "one",
        pollText: poll.optionOne,
    },
    {
        className: "two",
        pollText: poll.optionTwo,
    },
    {
        className: "three",
        pollText: poll.optionThree,
    },
    {
        className: "four",
        pollText: poll.optionFour,
    }
  ]

  const count = () => {

  }

  return (
    <div className='disp-one'>
      <h3>{poll.question}</h3>
      <div className='opt'>
        {
            pollOptions.map (poll =>
                <div className='option'>
                    <p>
                    {poll.pollText}
                    </p>
                    <button onClick={count} className={`btn ${poll.className}`}>Vote {poll.pollText}</button>
                </div>
            )
        }
      </div>

    </div>
  )
}

export default DisplayOne