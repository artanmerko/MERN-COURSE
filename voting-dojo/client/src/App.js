import '../src/App.css'
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayAll from "./views/DisplayAll";
import CreatePoll from '../src/components/CreatePoll'
import DisplayOne from './views/DisplayOne';
import Vote from './views/Vote';

function App() {
  return (
    <div className="App">
      <h1>Voting Dojo</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<DisplayAll/>} path='/'/>
          <Route element={<CreatePoll/>} path='/polls/new'/>
          <Route element={<DisplayOne/>} path='/polls/:id'/>
          <Route element={<Vote/>} path='/polls/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
