import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CardList, Gap, Search, Text} from '../../components';
import data from '../../assets/data/dataMovie.json';
import {ScrollView} from 'react-native-gesture-handler';

const ticket = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>My Movies</Text>
      </View>
      <Gap height={10} />
      <View style={styles.content}>
        <Text style={{fontSize: 18}}>Today movie</Text>
        <Gap height={20} />
        <CardList item={data[1]} />
        <Gap height={30} />
        <Text style={{fontSize: 18}}>Upcoming movie</Text>
        <Gap height={20} />
        <FlatList
          ItemSeparatorComponent={() => <Gap height={20} />}
          data={data.slice(2)}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.imdbID}
          renderItem={({item}) => <CardList item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default ticket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A25',
  },
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    marginHorizontal: 20,
  },
});
