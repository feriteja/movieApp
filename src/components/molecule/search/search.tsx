import React, {useCallback} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {item, searchResponse} from '../../../constant/type/normalType';

type props = {
  editable?: boolean;
  data?: React.Dispatch<React.SetStateAction<never[]>> | undefined;
  setError?: React.Dispatch<React.SetStateAction<null>> | undefined;
};

const search = ({editable = true, data, setError}: props) => {
  const searchMovie = useCallback(async (textSearch: string) => {
    try {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: '958faa09',
          s: textSearch,
        },
      });
      if (response.data.Response) {
        data([]);
        setError(response.data.Error);
      }
      data(response.data);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <IconFeather
        name="search"
        size={30}
        color="#fff"
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <TextInput
        editable={editable}
        style={{flex: 1}}
        placeholder="Search your favorite"
        onSubmitEditing={sub => searchMovie(sub.nativeEvent.text)}
      />
      <IconFeather
        name="mic"
        size={25}
        color="#ffffff99"
        style={{
          paddingHorizontal: 10,
          paddingVertical: 0,
          alignItems: 'center',
          justifyContent: 'center',
          borderLeftWidth: 0.2,
          borderColor: '#ffffff99',
        }}
      />
    </View>
  );
};

export default search;

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#2A2B37',
    marginHorizontal: 20,
    marginVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
