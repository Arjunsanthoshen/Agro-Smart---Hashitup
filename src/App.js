import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Equipment from './pages/Equipment';
import Fertilizers from './pages/Fertilizers';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/fertilizers" element={<Fertilizers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;