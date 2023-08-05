import './globals/global.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './loading_screen/LoadingScreen'
import Home from './pages/home'
import Surplus from 'pages/surplus';
import QWR from 'pages/qwr';
import Buyers from 'pages/buyers';
import Sellers from 'pages/sellers';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
  }, []);


  return (
    <div className="App">
      {isLoading ? <LoadingScreen /> : 
      <>
       <Routes>
          <Route index element={<Home />} />
          <Route path='/qwr' element={<QWR />} />
          <Route path='/surplus' element={<Surplus />} />
          <Route path='/buyers' element={<Buyers/>} />
          <Route path='/sellers' element={<Sellers />} />
       </Routes>
      </>
      }
    </div>
  );
}

export default App;
