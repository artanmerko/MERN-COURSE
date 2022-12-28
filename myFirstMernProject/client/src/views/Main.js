import React, {useState} from 'react';
import PersonList from '../components/PersonList';
import PersonForm from '../components/PersonForm';

const Main = (props) => {

  const [people, setPeople] = useState([]);

  const removeFromDom = personId =>{
    setPeople(people.filter(person=>person._id !== personId))
  }

  return (
    <div>
      <PersonForm people={people} setPeople={setPeople}/>
      <hr/>
      <PersonList people={people} setPeople={setPeople} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main