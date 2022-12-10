import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="app">
      let's build slack
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<div>Hi</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="*" element={<div>Hi</div>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
