import React, {useRef} from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import {Gap, Text} from '../../components';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type props = {
  genre: string;
  isShow: Readonly<Animated.SharedValue<1 | 0>>;
  onLayout: any;
  detailMovie: any;
};

const firstInfo = ({genre = '', isShow, onLayout, detailMovie}: props) => {
  const genres = genre.split(', ');
  const {height} = useWindowDimensions();
  const firstInfoRef = useAnimatedRef<Animated.View>();

  const aniInfoStyle = useAnimatedStyle(() => {
    const transY = interpolate(isShow.value, [0, 1], [0, height - 440]);
    const opacity = interpolate(isShow.value, [0, 1], [1, 0]);

    return {
      opacity: withTiming(opacity, {duration: 500}),
      transform: [{translateY: withTiming(transY, {duration: 1000})}],
    };
  });

  return (
    <Animated.View
      onLayout={a => {
        onLayout(a.nativeEvent.layout.height);
      }}
      ref={firstInfoRef}
      style={[styles.firstInfo, aniInfoStyle]}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>Story line</Text>
      <Gap height={10} />
      <Text>{detailMovie.Plot}</Text>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        {genres.map(item => {
          return (
            <View key={item} style={styles.genreTextContainer}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </Animated.View>
  );
};

export default firstInfo;

const styles = StyleSheet.create({
  firstInfo: {
    marginHorizontal: 20,
  },
  genreTextContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: '#aaaaaaaa',
    marginHorizontal: 5,
    borderRadius: 99,
  },
});
