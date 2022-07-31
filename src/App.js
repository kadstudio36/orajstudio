import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom"; 

import { About, Footer, Form, Header, Work, Workpage, Contact } from './containers';
import { Homepage } from './containers';
import { Navbar } from './components';
import './App.css';



const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg"></div>
            <BrowserRouter>
                <Navbar />

            <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/workpage" element={<Workpage />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App
  
