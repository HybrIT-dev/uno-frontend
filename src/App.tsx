import React from 'react';
import './App.css';
import { Container } from "react-bootstrap";

import HomeScreen from './screens/HomeScreen';
import ChoiceResultsScreen from './screens/ChoiceResultsScreen';
import ChoiceWizardScreen from './screens/ChoiceWizardScreen';
import CustomerActionScreen from './screens/CustomerActionScreen';
import DealerActionScreen from './screens/DealerActionScreen';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Switch>
            <Route path='/DealerAction' component={DealerActionScreen} />
            <Route path='/CustomerAction' component={CustomerActionScreen} />
            <Route path='/ChoiceWizard' component={ChoiceWizardScreen} />
            <Route path='/ChoiceResult' component={ChoiceResultsScreen} />
            <Route component={HomeScreen} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
