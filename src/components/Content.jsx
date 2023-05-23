import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContentItem from './ContentItem';

import nails from '../img/6-inch-nails.png';
import shingles from '../img/felt-shingles-midnight-black.png';
import insulation from '../img/loft-insulation-roll-50x590mm-11.8m-squared.png';
import timber from '../img/Wickes-treated-kiln-dried-c16-timber-45x95x3000mm.png';

const Content = () => {
  return (
    <View>
      <Text>Content</Text>
      <ContentItem image={nails} description='6-INCH NAILS' quantity='100' />
      <ContentItem
        image={shingles}
        description='FELT SHINGLES, MIDNIGHT BLACK'
        quantity='15'
      />
      <ContentItem
        image={insulation}
        description='Loft insulation roll 50x590mm 11.8m squared'
        quantity='1'
      />
      <ContentItem
        image={timber}
        description='Wickes-treated-kiln-dried-c16-timber-45x95x3000mm'
        quantity='1'
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({});
