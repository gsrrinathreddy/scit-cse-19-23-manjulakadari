import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'

import  Aboutus from'./Pages/Aboutus';
import Skills from'./Pages/Skills';
import Hobbies from'./Pages/Hobbies';
import Experience from'./Pages/Experience';
import Qualifications from'./Pages/Qualifications';
import Projects from'./Pages/Projects';
import Certifications from'./Pages/Certifications';
import Wrokshops from'./Pages/Wrokshops';
import Contactme from'./Pages/Contactme';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/Aboutus'element={<Aboutus/>}/>
        <Route path='/Skills'element={<Skills/>}/>
        <Route path='/Hobbies'element={<Hobbies/>}/>
        <Route path='/Experience'element={<Experience/>}/>
        <Route path='/Qualifications'element={<Qualifications/>}/>
        <Route path='/Projects'element={<Projects/>}/>
        <Route path='/Certifications'element={<Certifications/>}/>
        <Route path='/Wrokshops'element={<Wrokshops/>}/>
        <Route path='/contactme'element={<Contactme/>}/>
      </Routes>
      
      </div>
  );
}

export default App;
