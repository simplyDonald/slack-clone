import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import styled from "styled-components";
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from './firebase';
import Login from './components/Login';


function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
      {user ? (
        <BrowserRouter>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/about" element={<div>About</div>} />
              <Route path="*" element={<div>Hi</div>} />
            </Routes>
          </AppBody>
        
        </BrowserRouter>
      ) : <Login />}
      
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  
`