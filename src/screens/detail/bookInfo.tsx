import React from 'react';
import {FlatList, StyleSheet, useWindowDimensions, View} from 'react-native';
import {Gap, Text} from '../../components';
import {ChinemaSeat} from '../../components';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type props = {
  firstInfoHeight: number;
  isShow: Readonly<Animated.SharedValue<1 | 0>>;
};

const bookInfo = ({firstInfoHeight, isShow}: props) => {
  const cheatSeat = [
    [4, 4],
    [3, 2],
    [4, 4],
    [4, 4],
    [3, 4],
    [4, 4],
  ];

  const {height} = useWindowDimensions();

  const aniInfoStyle = useAnimatedStyle(() => {
    const transY = interpolate(isShow.value, [0, 1], [height - 440, 0]);
    const opacity = interpolate(isShow.value, [0, 1], [0, 1]);

    return {
      opacity: withTiming(opacity, {duration: 500}),
      transform: [{translateY: withTiming(transY, {duration: 500})}],
    };
  });

  return (
    <Animated.View
      style={[styles.container, {top: -firstInfoHeight}, aniInfoStyle]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={styles.availability}>
          <View style={[styles.box]} />
          <Text>Available</Text>
        </View>
        <View style={styles.availability}>
          <View style={[styles.box, {backgroundColor: '#666'}]} />
          <Text>Available</Text>
        </View>
        <View style={styles.availability}>
          <View style={[styles.box, {backgroundColor: 'rgb(101,200,135)'}]} />
          <Text>Available</Text>
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={{height: 4, backgroundColor: '#ccc'}} />
        <Text style={{textAlign: 'center', fontSize: 20}}>Screen </Text>
        <Gap height={60} />
        <FlatList
          data={cheatSeat}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
          ItemSeparatorComponent={() => <Gap height={10} />}
          renderItem={({item}) => {
            return <ChinemaSeat item={item} />;
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconMCI name="ticket-outline" size={25} color="#ccc" />
            <Text> x 0</Text>
          </View>
          <Text>$24</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default bookInfo;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  availability: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    height: 15,
    width: 15,
    backgroundColor: '#aaa',
    marginHorizontal: 5,
  },
});
