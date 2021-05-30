import {useRoute} from '@react-navigation/core';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {item} from '../../constant/type/normalType';
import {DetailScreenRouteProp} from '../../constant/type/routeType';

import {Gap, Text} from '../../components';
import IconAnt from 'react-native-vector-icons/AntDesign';
import FirstInfo from './firstInfo';
import SecondInfo from './bookInfo';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import axios from 'axios';
import Config from 'react-native-config';

const {height, width} = Dimensions.get('window');

const Star = ({num}: {num: number}) => {
  const arrayStar = [0, 0, 0, 0, 0];
  const filUntil = num / 2;
  arrayStar.fill(1, 0, filUntil);

  return (
    <View style={{flexDirection: 'row'}}>
      {arrayStar.map((item, index) => {
        return item == 0 ? (
          <IconAnt size={20} key={index} name="staro" color="#fff" />
        ) : (
          <IconAnt size={20} key={index} name="star" color="red" />
        );
      })}
    </View>
  );
};

const detail = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const [detailMovie, setDetailMovie] = useState<any>(null);

  const getData = useCallback(async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: Config.API_KEY,
        i: route.params.item.imdbID,
        plot: 'full',
      },
    });
    setDetailMovie(response.data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const [showBook, setShowBook] = useState(false);
  const [firstInfoHeight, setFirstInfoHeight] = useState(0);

  const isShow = useDerivedValue(() => {
    return showBook ? 1 : 0;
  });
  const aniTopSecStyle = useAnimatedStyle(() => {
    const heigtPic = interpolate(
      isShow.value,
      [0, 1],
      [height * 0.35, height * 0.15],
    );

    return {height: withTiming(heigtPic, {duration: 500})};
  });
  const aniTopImageStyle = useAnimatedStyle(() => {
    const heigtPic = interpolate(
      isShow.value,
      [0, 1],
      [height * 0.3, height * 0.15],
    );

    return {height: withTiming(heigtPic, {duration: 500})};
  });

  if (!detailMovie) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#191A25',
        }}>
        <ActivityIndicator size="large" color="red" />
        <Text>Please wait....</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Animated.View style={[styles.topSection, aniTopSecStyle]}>
          <Animated.Image
            source={{uri: detailMovie.Poster}}
            style={[StyleSheet.absoluteFill, aniTopImageStyle]}
            resizeMode="cover"
            blurRadius={4}
          />
          <View style={styles.imageContainer}>
            <Image
              source={{uri: detailMovie.Poster}}
              style={[
                {
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: 10,
                },
              ]}
              resizeMode="contain"
            />
          </View>
        </Animated.View>
        <Gap height={20} />
        <View style={styles.content}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            {detailMovie.Title}
          </Text>
          <Gap height={10} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Star num={parseInt(detailMovie.imdbRating)} />
            <Text style={{fontSize: 16, marginLeft: 10}}>
              {detailMovie.imdbRating}
            </Text>
          </View>
          <Gap height={10} />
          <View style={{flexDirection: 'row'}}>
            <Text>
              <IconAnt name="clockcircle" color="#aaa" /> {detailMovie.Runtime}
            </Text>
            <Text style={{marginLeft: 40}}>
              <IconAnt name="calendar" color="#aaa" /> {detailMovie.Released}
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <FirstInfo
          genre={detailMovie.Genre}
          isShow={isShow}
          onLayout={a => setFirstInfoHeight(a)}
          detailMovie={detailMovie}
        />
        <SecondInfo firstInfoHeight={firstInfoHeight} isShow={isShow} />
      </ScrollView>
      <TouchableOpacity
        style={styles.btnOrder}
        onPress={() => setShowBook(prev => !prev)}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {showBook ? 'Pay' : 'Book'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A25',
    paddingBottom: 0,
  },
  topSection: {
    height: height * 0.35 + 60,
  },
  imageContainer: {
    height: height * 0.2,
    width: width * 0.3,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  content: {
    marginHorizontal: 20,
  },

  btnOrder: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    left: 30,
    height: 50,
    backgroundColor: '#rgb(101,200,135)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
  },
  secondInfo: {
    marginHorizontal: 20,
  },
});
