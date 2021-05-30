import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {Gap, Text} from '../..';
import {item} from '../../../constant/type/normalType';
import IcontAnt from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import {NavToDetail} from '../../../constant/type/routeType';

const cardList = ({item}: {item: item}) => {
  const navigation = useNavigation<NavToDetail>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.push('detail', {item})}
      style={styles.container}>
      <Image
        source={{uri: item.Poster}}
        style={{height: 170, width: 130, borderRadius: 20}}
        resizeMode="contain"
      />
      <View
        style={{
          position: 'absolute',
          top: -30,
          left: 130,
          backgroundColor: '#191A25',
          height: 40,
          width: 40,
          borderRadius: 90,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: -30,
          left: 130,
          backgroundColor: '#191A25',
          height: 40,
          width: 40,
          borderRadius: 90,
        }}
      />

      <View style={{marginLeft: 10, flex: 1, paddingVertical: 30}}>
        <View style={{height: 70}}>
          <Text numberOfLines={2} style={{fontWeight: 'bold', fontSize: 17}}>
            {item.Title}
          </Text>
        </View>
        <View>
          <Text style={{color: 'red', fontWeight: 'bold'}}>
            <IcontAnt name="star" color="red" size={18} /> 8.5
          </Text>
          <Gap height={5} />
          <Text style={{marginLeft: 5}}>{item.Year}</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            backgroundColor: '#FFC83D',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 40,
          }}>
          <Text style={{fontWeight: 'bold', color: '#000000aa', fontSize: 12}}>
            IMDB 7.5
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default cardList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: 'row',
    elevation: 1,
    borderWidth: 1,
    borderColor: '#ffffff44',
    backgroundColor: '#292B38',
  },
});
