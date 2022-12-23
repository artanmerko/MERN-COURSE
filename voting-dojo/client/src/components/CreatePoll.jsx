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
        console.log(err.response.data.error.message);
        setErrors(err.response.data.error.message);
    })
  }

  return (
    <div>
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
      errors={errors}
      />

    </div>
  )
}

export default CreatePoll