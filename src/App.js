import './globals/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
          </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
