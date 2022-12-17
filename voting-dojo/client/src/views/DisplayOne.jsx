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


  return (
    <div className='disp-one'>
      <h3>{poll.question}</h3>
      <div className='opt'>
        <div className='option'>
          <p>
            {poll.optionOne}
          </p>
          <button className='btn one'>Vote {poll.optionOne}</button>
        </div>
        <div className='option'>
          <p>
            {poll.optionTwo}
          </p>
          <button className='btn two'>Vote {poll.optionTwo}</button>
        </div>
        <div className='option'>
          <p>
            {poll.optionThree}
          </p>
          <button className='btn three'>Vote {poll.optionThree}</button>
        </div>
        <div className='option'>
          <p>
            {poll.optionFour}
          </p>
          <button className='btn four'>Vote {poll.optionFour}</button>
        </div>
      </div>

    </div>
  )
}

export default DisplayOne