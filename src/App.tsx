
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PresentationCard from './components/PresentationCard';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <PresentationCard />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>      
    </>
  )
}

export default App
