import './App.css';
import React from 'react';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <Router className="d-flex">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <About></About>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;