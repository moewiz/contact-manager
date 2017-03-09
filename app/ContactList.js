import React, {Component} from 'react';
import {
  ListView,
  StyleSheet
} from 'react-native';
import ContactItem from './ContactItem';

class ContactList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    // $.ajax({
    //   url: 'https://randomuser.me/api/',
    //   dataType: 'json',
    //   success: function (data) {
    //     this.setState
    //   }
    // });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          gender: 'male',
          name: {
            title: 'mr',
            first: 'jack',
            last: 'taylor'
          },
          picture: {
            large: 'https://randomuser.me/api/portraits/men/13.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/13.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/13.jpg'
          }
        },
        {
          gender: 'female',
          name: {
            title: 'ms',
            first: 'tina',
            last: 'jennings'
          }, picture: {
            large: 'https://randomuser.me/api/portraits/women/22.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/22.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/22.jpg'
          }
        },
        {
          gender: 'male',
          name: {
            title: 'mr',
            first: 'justin',
            last: 'sanchez'
          }, picture: {
            large: 'https://randomuser.me/api/portraits/men/38.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg'
          }
        }
      ])
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <ContactItem {...data} />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  }
});

export default ContactList;
