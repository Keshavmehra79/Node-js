import axios from 'axios';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Display from './Display';
import Insert from './Insert';
import Home from './Home';

function App() {
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>    
    <Route  index element={<Home/>}/>
    <Route path='/insert'  element={<Insert/>}/>
    <Route path='/display' element={<Display/>}/>

</Route>
  </Routes></BrowserRouter>
  </>)
}

export default App