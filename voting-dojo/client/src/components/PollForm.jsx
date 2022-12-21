import React, { useState } from 'react'

const PollForm = (props) => {

  const {initialQuestion, initialOptionOne, initialOptionTwo, initialOptionThree, initialOptionFour,onSubmitProp,errors} = props;

  const [question, setQuestion] = useState(initialQuestion);
  const [optionOne, setOptionOne] = useState(initialOptionOne);
  const [optionTwo, setOptionTwo] = useState(initialOptionTwo);
  const [optionThree, setOptionThree] = useState(initialOptionThree);
  const [optionFour, setOptionFour] = useState(initialOptionFour);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      question,
      optionOne,
      optionTwo,
      optionThree,
      optionFour
    })
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {
          errors.map((error, index) => {
            return (
              <p key={index}>{error}</p>
            )
          })
        }
        <div className='left'>
          <p>Your question:</p>
          <textarea
          cols="20" rows="5"
          type='text'
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}>
          </textarea>
          { errors.question ?
            <p>{errors.question.message}</p>
              : null
          }
          <div className='submit'>
            <input type="submit" value='Submit Poll' />
          </div>
        </div>

        <div className='right'>
          <div>
          <label>Option 1</label><br/>
          <input
          type="text"
          value={optionOne}
          onChange={(e)=>setOptionOne(e.target.value)}
          />
          { errors.optionOne ?
            <p>{errors.optionOne.message}</p>
              : null
          }
          </div>

          <div>
          <label>Option 2</label><br/>
          <input
          type="text"
          value={optionTwo}
          onChange={(e)=>setOptionTwo(e.target.value)}
          />
          { errors.optionTwo ?
            <p>{errors.optionTwo.message}</p>
              : null
          }
          </div>

          <div>
          <label>Option 3</label><br/>
          <input
          type="text"
          value={optionThree}
          onChange={(e)=>setOptionThree(e.target.value)}
          />
          </div>

          <div>
          <label>Option 4</label><br/>
          <input
          type="text"
          value={optionFour}
          onChange={(e)=>setOptionFour(e.target.value)}
          />
          </div>

        </div>
      </form>
    </div>
  )
}

export default PollForm