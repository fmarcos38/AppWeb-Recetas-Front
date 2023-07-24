import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CardReceta from './components/CardRecetas';
import CreateR from './components/FormCreateReceta';
import Login from './components/Login';
import Registrarse from './components/Registrarse';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/createR' element={<CreateR/>}/>


        {/* vista solo para desarrollador */}
        <Route path='/cardReceta' element={<CardReceta/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarse' element={<Registrarse/>}/>


      </Routes>
    </div>
  );
}

export default App;
