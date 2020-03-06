import React from 'react';
import { useLocation, Route } from 'react-router-dom';

import AnimatedSwitch from '../components/AnimatedSwitch';

import HomeScreen from '../screens/HomeScreen';
import ChoiceResultsScreen from '../screens/ChoiceResultsScreen';
import ChoiceWizardScreen from '../screens/ChoiceWizardScreen';
import CustomerActionScreen from '../screens/CustomerActionScreen';
import DealerActionScreen from '../screens/DealerActionScreen';
import BrandWizardScreen from '../screens/BrandWizardScreen';

const AppRouter = () => {

  const location = useLocation();

  return (
    <AnimatedSwitch location={location}>
      <Route path='/DealerAction' component={DealerActionScreen} />
      <Route path='/CustomerAction' component={CustomerActionScreen} />
      <Route path='/ChoiceWizard' component={ChoiceWizardScreen} />
      <Route path='/ChoiceResult' component={ChoiceResultsScreen} />
      <Route path='/BrandWizard' component={BrandWizardScreen} />
      <Route component={HomeScreen} />
  </AnimatedSwitch>
  )
}

export default AppRouter;