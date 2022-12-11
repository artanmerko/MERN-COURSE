import React from 'react';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/products' />
          <Route element={<Detail/>} path='/products/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
