import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text, Search, Carosel, Gap} from '../../components';
import {HomeNavProp} from '../../constant/type/routeType';

const home = () => {
  const navigation = useNavigation<HomeNavProp>();
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            height: 50,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Hello Feri T.</Text>
          <Text style={{color: '#ffffff99'}}>Book your favorite movie</Text>
        </View>
        <Image
          source={require('../../assets/img/ava/ava2.png')}
          style={{height: 50, width: 50, borderRadius: 40}}
        />
      </View>
      <Gap height={30} />
      <Pressable onPress={() => navigation.navigate('search')}>
        <Search editable={false} />
      </Pressable>
      <Gap height={30} />
      <Carosel />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A25',
  },
  topSection: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
