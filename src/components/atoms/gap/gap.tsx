import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

type props = {
  height?: number;
  width?: number;
  style?: ViewStyle;
};

const gap = ({height, width, style}: props) => {
  return <View style={[style, {height, width}]} />;
};

export default gap;
