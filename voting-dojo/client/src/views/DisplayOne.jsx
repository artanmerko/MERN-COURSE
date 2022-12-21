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
    }
  ]

  if(poll.optionThree !== ''){
    pollOptions.push(
     {  className: "three",
        pollText: poll.optionThree,
    }
    )
  }
  if(poll.optionFour !== ''){
    pollOptions.push(
     {  className: "four",
        pollText: poll.optionFour,
    }
    )
  }


  return (
    <div className='disp-one'>
      <h3>{poll.question}</h3>
      <div className='opt'>
        {
            pollOptions.map ((poll, index) =>
                <div className='option' key={index}>
                    <p>
                    {poll.pollText}
                    </p>
                    <button className={`btn ${poll.className}`}>Vote {poll.pollText}</button>
                </div>
            )
        }
      </div>

    </div>
  )
}

export default DisplayOne