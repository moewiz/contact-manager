import React, {Component} from 'react';
import {
  ListView,
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import ContactItem from './ContactItem';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  }

  fetchData() {
    fetch('https://randomuser.me/api/?results=20')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data.results),
          loaded: true
        });
      }).done();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.loaded)
      return this.renderLoadingView();

    return this.renderListView();
  }

  renderLoadingView() {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator color="#aa00aa" />
      </View>
    );
  }

  renderListView() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(data) => <ContactItem {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  },
  loading: {
    flex: 1,
    width: 100,
    height: 100
  }
});

export default ContactList;
