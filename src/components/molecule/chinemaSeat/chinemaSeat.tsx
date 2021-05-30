import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const seatGroupWidth = (width - 120) / 3;
const seatpWidth = seatGroupWidth / 4;

const chinemaSeat = ({item}: {item: number[]}) => {
  const arraySeat = [...Array(item[0] * item[1]).keys()];

  return (
    <View
      style={{
        width: seatpWidth * item[0] + 20,
        height: seatpWidth * item[1] + 20,
        flexDirection: 'row',
        marginHorizontal: 7,
        flexWrap: 'wrap',
        alignContent: 'flex-end',
        justifyContent: 'space-around',
      }}>
      {arraySeat.map((item, idx) => {
        return (
          <View
            key={idx}
            style={{
              height: seatpWidth,
              width: seatpWidth,
              backgroundColor: '#aaa',
              alignSelf: 'flex-end',
              marginVertical: 3,
              borderRadius: 4,
            }}
          />
        );
      })}
    </View>
  );
};

export default chinemaSeat;

const styles = StyleSheet.create({});
