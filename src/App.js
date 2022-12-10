import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="*" element={<div>Hi</div>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
