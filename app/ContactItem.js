import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class ContactItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.picture.thumbnail}} style={styles.photo} />
        <Text style={styles.text}>
          {`${this.props.name.first} ${this.props.name.last}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  text: {
    marginLeft: 12,
    fontSize: 16
  }
});

export default ContactItem;
