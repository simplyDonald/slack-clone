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
import Spinner from "react-spinkit";


function App() {
  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />

          <Spinner 
          name="cube-grid"
          color="purple"
          fadeIn="none"
          />
            
        </AppLoadingContents>
      </AppLoading>
    )


  }
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

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

`

const AppLoadingContents = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`