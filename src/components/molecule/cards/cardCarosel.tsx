import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {Gap, Text} from '../../';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {item} from '../../../constant/type/normalType';

type props = {
  item: item;
  index: number;
  scrollX: Animated.SharedValue<number>;
};

const {width, height} = Dimensions.get('window');

const cardWidth = width * 0.7;
const cardHeight = height * 0.5;

const cardCarosel = ({item, index, scrollX}: props) => {
  const inputRange = [
    (index - 2) * cardWidth,
    (index - 1) * cardWidth,
    index * cardWidth,
  ];

  const aniStyle = useAnimatedStyle(() => {
    const rotate = interpolate(scrollX.value, inputRange, [10, 0, -10]);
    const scale = interpolate(scrollX.value, inputRange, [0.8, 1, 0.8]);

    return {
      transform: [{scale}],
    };
  });

  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Animated.Image
          source={{uri: item.Poster}}
          style={[StyleSheet.absoluteFill, {borderRadius: 10}, aniStyle]}
        />
      </View>
    </View>
  );
};

export default cardCarosel;

const styles = StyleSheet.create({
  container: {
    height: cardHeight,
    width: cardWidth,
  },
});
