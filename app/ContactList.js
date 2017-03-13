import React, {Component} from 'react';
import {
  ListView,
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import ContactItem from './ContactItem';
import Header from './Header';
import Footer from './Footer';
import SectionHeader from './SectionHeader';

const API_URL = 'https://randomuser.me/api/?results=20';

class ContactList extends Component {
  constructor(props) {
    super(props);

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    this.state = {
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        getSectionData,
        getRowData
      })
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  formatData(data) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    alphabet.forEach((currentChar, sectionId) => {
      // Get users whose first name starts with the current character
      const users = data.results.filter(
        (user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);

      if (users.length > 0) {
        sectionIds.push(sectionId);
        // section data
        dataBlob[sectionId] = {character: currentChar};
        rowIds.push([]);
        users.forEach((user, i) => {
          const rowId = `${sectionId}:${i}`;

          rowIds[rowIds.length - 1].push(rowId);
          // row data
          dataBlob[rowId] = user;
        });
      }
    });

    this.setState({
      loaded: true,
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
    });
  }

  fetchData() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => this.formatData(data))
      .done();
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
        renderHeader={() => <Header />}
        renderFooter={() => <Footer />}
        renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
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
