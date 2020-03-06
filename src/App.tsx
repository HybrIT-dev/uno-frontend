import React from 'react';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppNavigation from './components/AppNavigation';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <div className="App">
      <AppNavigation />
      <Container>
        <Router>
          <AppRouter />
        </Router>
      </Container>
    </div>
  );
}

export default App;
