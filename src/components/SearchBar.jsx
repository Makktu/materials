import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name='search-outline' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        autoComplete='off'
        style={styles.inputStyle}
        placeholder='Search All Materials'
        placeholderTextColor='#f4511e'
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        underlineColorAndroid='transparent'
        keyboardType='visible-password'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#36373f',
    color: 'yellow',
    height: 55,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  inputStyle: {
    fontSize: 26,
    color: '#f4511e',
    width: '100%',
    bottom: 1,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginLeft: 6,
    marginRight: 4,
    top: 2,
    color: '#f4511e',
  },
});

export default SearchBar;
