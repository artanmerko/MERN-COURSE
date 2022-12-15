import './App.css'
import React from 'react';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} exact path='/'/>
          <Route element={<Detail/>} exact path='/products/:id'/>
          <Route element={<Update/>} exact path='/products/edit/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
