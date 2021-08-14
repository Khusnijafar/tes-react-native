/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {getUserData} from './redux/actions';

const HomeScreen = props => {
  console.log(props, 'props');
  const [userData, setUserData] = useState(null);

  useEffect(async () => {
    const dataUser = await props.getUserData();
    console.log(dataUser, 'dataUser');
    setUserData(dataUser);
  }, []);

  console.log(userData, 'user');

  return (
    <View style={styles.wrapperMainView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userData !== null &&
          userData.map((index, key) => (
            <View key={key} style={styles.wrapperData}>
              <Text style={{margin: 5}}>Name : {index.name}</Text>
              <Text style={{margin: 5}}>Phone : {index.phone}</Text>
              <Text style={{margin: 5}}>Email : {index.email}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = {getUserData};
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  wrapperMainView: {marginHorizontal: 16, marginTop: 16},
  wrapperData: {
    marginBottom: 16,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
});
