import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateR from './components/FormCreateReceta';
import DetalleReceta from './components/DeatalleReceta';
import Login from './components/Login';
import Registrarse from './components/Registrarse';

function App() {  

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarse' element={<Registrarse/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/createR' element={<CreateR/>}/>
        <Route path='/detalle/:dia/:barbie/:_id' element={<DetalleReceta />}/>
      </Routes>
    </div>
  );
}

export default App;
