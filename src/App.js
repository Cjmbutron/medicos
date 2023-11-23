import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from '../src/pages/Inicio'
import Nosotros from '../src/pages/nosotros'
import Cabecera from './Components/Cabecera';
import './App.css';

function App() {
  return (
    <Router>
      <Cabecera/>
      <Routes>
      <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros/>}  />
        <Route path="/contact"  />
      </Routes>
    </Router>
  );
}

export default App;
