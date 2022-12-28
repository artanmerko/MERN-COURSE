import './App.css';
import Form from './components/Form';
import MovieList from './components/MovieList';
import {BrowserRouter, Routes,Route} from 'react-router-dom' 
import NavBar from './components/NavBar';
import Detail from './components/Detail';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/form' element={<Form/>}/>
          <Route path='/list' element={<MovieList/>}/>
          <Route path='/list/:id' element={<Detail/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
