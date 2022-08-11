import './App.css';
import React from 'react';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>

      <Footer></Footer>
    </div>
  );
}

export default App;