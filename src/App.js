import './App.css';
import React, {useState,useEffect} from 'react';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
     <Outlet/>
    </div>
  );
}

export default App;
