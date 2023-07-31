import './globals/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Home from './pages/home'
import Surplus from 'pages/surplus';
import QWR from 'pages/qwr';
import Buyers from 'pages/buyers';
import Sellers from 'pages/sellers';

function App() {
  return (
       <Routes>
          <Route index element={<Home />} />
          <Route path='/qwr' element={<QWR />} />
          <Route path='/surplus' element={<Surplus />} />
          <Route path='/buyers' element={<Buyers/>} />
          <Route path='/sellers' element={<Sellers />} />
       </Routes>
  );
}

export default App;
