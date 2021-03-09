import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/React-Portfolio' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Work' component={Work} />
          <Route path='/Contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;