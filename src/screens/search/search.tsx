import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CardList, Gap, Search, Text} from '../../components';
import data from '../../assets/data/dataMovie.json';
import {item, searchResponse} from '../../constant/type/normalType';

const search = () => {
  const [dataSearch, setDataSearch] = useState<searchResponse | undefined>([]);
  const [error, setError] = useState(null);

  console.log(dataSearch);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Search <Text style={{fontWeight: 'normal'}}>Your Movie</Text>
        </Text>
      </View>
      <Search data={setDataSearch} setError={setError} />
      {error ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Data not found</Text>
        </View>
      ) : (
        <FlatList
          data={dataSearch?.Search}
          keyExtractor={item => item.imdbID}
          ItemSeparatorComponent={() => <Gap height={20} />}
          contentContainerStyle={{
            marginHorizontal: 20,
            marginVertical: 20,
            paddingBottom: 40,
          }}
          renderItem={({item}) => {
            return <CardList item={item} />;
          }}
        />
      )}
    </View>
  );
};

export default search;

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
});
