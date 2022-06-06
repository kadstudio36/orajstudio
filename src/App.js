import React from 'react'

import { About, Footer, Form, Header, Work } from './containers';
import { Navbar } from './components';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />

            </div>
            <About />
            <Work />
            <Form />
            <Footer />
        </div>
    )
}

export default App