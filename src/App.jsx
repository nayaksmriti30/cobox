import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
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
