import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PresentationCard from "./components/PresentationCard";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PresentationCard />
      <Benefits />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
