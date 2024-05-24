import { useState } from 'react'
import './App.css'

import  Hero  from './component/Hero';
import Header from './component/Header';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';


function App() {
  return (
    // <>
    //  <div>
    //  <Header/>
    //   <Hero/>
    //  </div>
    // </>

    <BrowserRouter>
    <Routes>
   
        <Route path='/' element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
  
    </Routes>
  </BrowserRouter>

  );
}

export default App;
