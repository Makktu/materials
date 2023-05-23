import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ContentItem = ({ image, description, quantity }) => {
  return (
    <>
      <View style={styles.horizontalImg}>
        <Image style={styles.imageStyle} source={image} />
        <Text style={styles.mainText}>{description}</Text>
        <Text style={styles.mainText}>QTY: {quantity}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: 'whitesmoke',
    fontSize: 20,
    padding: 5,
  },
  imageStyle: {
    borderRadius: 10,
    height: 175,
    width: 175,
  },
  horizontalImg: {
    flexDirection: 'column',
    marginBottom: 10,
  },
});

export default ContentItem;
