import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './css/CreateForm.css';
import PollForm from './PollForm';


const CreatePoll = () => {

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const createPoll = (poll) => {
    axios.post('http://localhost:8000/polls/new',poll)
      .then((res) => {
        console.log(res);
        navigate(`/`);
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
    })
  }

  return (
    <div>
      {
        errors.map((error, index) => {
          return (
            <p key={index}>{error}</p>
          )
        })
      }
      <div className='link-home'>
      <Link to={'/'} className='home-btn'>Back Home</Link>
      </div>
      <PollForm
      onSubmitProp = {createPoll}
      initialQuestion = ''
      initialOptionOne = ''
      initialOptionTwo = ''
      initialOptionThree = ''
      initialOptionFour = ''
      />
    </div>
  )
}

export default CreatePoll