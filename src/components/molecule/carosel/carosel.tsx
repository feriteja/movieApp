import React from 'react';
import {FlatList, StyleSheet, View, Dimensions, Platform} from 'react-native';
import {CardCarosel, Gap, Text} from '../../';
import data from '../../../assets/data/dataMovie.json';
import Animated, {useSharedValue} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const carosel = () => {
  const scrollX = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', marginHorizontal: 20, fontSize: 22}}>
        Feature <Text style={{fontWeight: 'normal'}}>Movie</Text>
      </Text>
      <Gap height={20} />
      <FlatList
        data={[{imdbID: 'dummy'}, ...data, {imdbID: 'dummy2'}]}
        horizontal
        contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={item => item.imdbID}
        bounces={false}
        snapToAlignment="end"
        showsHorizontalScrollIndicator={false}
        renderScrollComponent={props => (
          <Animated.ScrollView
            {...props}
            onScroll={props =>
              (scrollX.value = props.nativeEvent.contentOffset.x)
            }
          />
        )}
        decelerationRate={'normal'}
        snapToInterval={width * 0.7}
        renderItem={({item, index}) => {
          if (item.imdbID == 'dummy' || item.imdbID == 'dummy2')
            return (
              <Gap
                width={(width - width * 0.7) / 2}
                style={{backgroundColor: 'transparent'}}
              />
            );
          return <CardCarosel scrollX={scrollX} item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default carosel;

const styles = StyleSheet.create({
  container: {marginTop: 20},
});
