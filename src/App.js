import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom"; 

import { About, Footer, Form, Header, Work, Workpage, Contact, Toastcoin, Muspace } from './containers';
import { Homepage } from './containers';
import { Navbar } from './components';
import { Helmet } from "react-helmet";
import './App.css';



const App = () => {


    return (
        <div className="App">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Odify</title>
                <link rel="canonical" href="http://odify.ca/" />
                <meta name="og:site_name" content="Odify" />
                <meta name="description" content="Odify is a creative agency with market-leading design and development skills. We help you transform your brand and make the digital shift." />
                <meta name="keywords" content="odify, creative, odify creative, odifycreative, Odifycreative, Odify Creative, ui, ux, design, agency, development, creative, branding, product, application, website" />
            </Helmet>


        
            <div className="gradient_bg"></div>
            <BrowserRouter>
                <Navbar />
            
            <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/workpage" element={<Workpage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/toastcoin" element={<Toastcoin />} />
            <Route path="/muspace" element={<Muspace />} />
            </Routes>
            
        </BrowserRouter>

        </div>
    
    )
    
}

export default App
  
