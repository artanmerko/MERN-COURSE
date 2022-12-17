import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import UpdateAuthor from './views/UpdateAuthor';
import AddAuthor from './views/AddAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' />
          <Route element={<AddAuthor/>} path='/new'/>
          <Route element={<Detail/>} path='/:id'/>
          <Route element={<UpdateAuthor/>} path='/author/edit/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
