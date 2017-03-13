import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class SectionHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.character}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#EAEAEA'
  },
  text: {
    fontSize: 13
  }
});

export default SectionHeader;