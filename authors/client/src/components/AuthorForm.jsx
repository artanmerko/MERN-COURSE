import React,{useState} from 'react'

const AuthorForm = (props) => {

  const {initialName, onSubmitProp} = props;
  const [name, setName] = useState(initialName);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name
    })
  }

  return (
    <div clasName="col-5 mx-auto mt-5">
      <form className="mt-3" onSubmit={onSubmitHandler}>
        <p className="form-group">
          <label>Name: </label>
          <input
          className="form-control"
          type="text"
          onChange={(e)=>setName(e.target.value)}
          value={name} />
        </p>
        <p className="text-center">
          <button className='btn btn-primary ml-3'>Submit</button>
        </p>
      </form>
    </div>
  )
}

export default AuthorForm