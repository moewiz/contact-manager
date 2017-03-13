import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Search...'
          onChangeText={(text) => console.log('searching for', text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1'
  },
  input: {
    flex: 1,
    height: 30,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2
  }
});

export default Header;
