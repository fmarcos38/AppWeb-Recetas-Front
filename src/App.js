import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CardReceta from './components/CardRecetas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>

        {/* vista solo para desarrollador */}
        <Route path='/cardReceta' element={<CardReceta/>}/>


      </Routes>
    </div>
  );
}

export default App;
