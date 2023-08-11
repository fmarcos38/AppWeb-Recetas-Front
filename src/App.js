import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateR from './components/FormCreateReceta';
import DetalleReceta from './components/DeatalleReceta';
import { Card } from '@mui/material';


function App() {  

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/createR' element={<CreateR/>}/>
        <Route path='/detalle/:dia/:barbie/:_id' element={<DetalleReceta />}/>      

        <Route path='/card' element={<Card/>}/>
      </Routes>
    </div>
  );
}

export default App;
