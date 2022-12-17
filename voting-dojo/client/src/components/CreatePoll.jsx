import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './css/CreateForm.css';
import PollForm from './PollForm';


const CreatePoll = () => {

  const navigate = useNavigate();

  const createPoll = (poll) => {
    axios.post('http://localhost:8000/polls/new', poll)
      .then((res) => {
        console.log(res)
        navigate(`/`)
      })
      .catch(err=>console.log(err))
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
      />
    </div>
  )
}

export default CreatePoll