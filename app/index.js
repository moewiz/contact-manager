import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import ContactItem from './ContactItem';
import ContactList from './ContactList';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="contactList"
      component={ContactList}
      title="Contacts"
      initial
    />
    <Scene
      key="contactItem"
      component={ContactItem}
      title="Item"
    />
  </Scene>
);

class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}

export default App;
