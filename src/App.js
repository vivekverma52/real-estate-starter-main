
import React from 'react';

// importing routes and route

import { Routes, Route } from 'react-router-dom'; 

//importing conponents

import Header from './components/Header';
import Footer from './components/Footer';

//importing pages

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return <div>
    <Header />
    <Routes>
    <Route path='/' element ={<Home />} />
    <Route path='/property/:id' element ={<PropertyDetails />} />8
    </Routes>
    <Footer />
  </div>;
};

export default App;
