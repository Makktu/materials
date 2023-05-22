import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutScreen = ({ route, navigation }) => {
  const { screenId, otherParam } = route.params;

  return (
    <View>
      <Text style={{ color: 'white' }}>About Screen</Text>
      <Text>itemId: {JSON.stringify(screenId)}</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button
        title='Go back to first screen in stack'
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default AboutScreen;
