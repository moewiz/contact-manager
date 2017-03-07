import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import GreyScreen from './GreyScreen';
import ScarletScreen from './ScarletScreen';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="scarlet"
      component={ScarletScreen}
      title="Scarlet"
      initial
    />
    <Scene
      key="grey"
      component={GreyScreen}
      title="Grey"
    />
  </Scene>
);

class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}

export default App;
