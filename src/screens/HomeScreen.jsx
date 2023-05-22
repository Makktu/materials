import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [term, setTerm] = useState('');
  // *
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.background}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => console.log(term)}
        />
        <ScrollView>
          <View>
            <Text>TEST</Text>
            <Button
              title='PRESS ME'
              onPress={() => navigation.navigate('About')}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1d1e1f',
    color: 'orangered',
    flex: 1,
  },
  mainText: {
    color: 'orangered',
    fontSize: 14,
    margin: 8,
  },
  listText: {
    color: 'dodgerblue',
    backgroundColor: 'black',
    marginVertical: 2,
    fontSize: 18,
    left: 5,
  },
});

export default HomeScreen;
