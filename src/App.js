import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CardReceta from './components/CardRecetas';
import CreateR from './components/FormCreateReceta';
import Login from './components/Login';
import Registrarse from './components/Registrarse';
import './App.css';
import Circle from './components/circular';
import DetalleReceta from './components/DeatalleReceta';


function App() {

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/createR' element={<CreateR/>}/>
        <Route path='/detalle/:dia/:barbie/:_id' element={<DetalleReceta />}/>

        {/* vista solo para desarrollador */}
        <Route path='/cardReceta' element={<CardReceta/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarse' element={<Registrarse/>}/>
        <Route path='/circular' element={<Circle/>}/>


      </Routes>
    </div>
  );
}

export default App;
