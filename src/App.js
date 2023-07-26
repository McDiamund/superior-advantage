import './globals/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Home from './pages/home'
import Surplus from 'pages/surplus';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route index element={<Home />} />
          <Route path='/surplus' element={<Surplus />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
