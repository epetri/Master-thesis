import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Firstpage from './views/Firstpage';
import Login from './views/Login';
import Register from './views/Register';
import Startpage from './views/Startpage';
import Addworkout from './views/AddWorkout';

const MainNavigator = createStackNavigator({
  Startpage: { screen: Startpage },
  Login: { screen: Login },
  Register: { screen: Register },
  Firstpage: { screen: Firstpage },
  Addworkout: { screen: Addworkout }
});

const App = createAppContainer(MainNavigator);

export default App;
