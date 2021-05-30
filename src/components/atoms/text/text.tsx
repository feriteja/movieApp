import React from 'react';
import {View, Text, TextProps} from 'react-native';

const text: React.FC<TextProps> = props => {
  return <Text style={[{color: '#fff'}, props.style]}>{props.children}</Text>;
};

export default text;
