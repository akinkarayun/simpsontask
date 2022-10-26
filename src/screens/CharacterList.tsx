import {useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {Simpson} from '../Types/types';
import useFetch from '../utils/fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CharacterListProps {}

const URL = 'https://5fc9346b2af77700165ae514.mockapi.io/simpsons';

const {width} = Dimensions.get('window');

export const CharacterList: React.FC<CharacterListProps> = ({}) => {
  const {fetchData, loading, error} = useFetch(URL);
  const navigation = useNavigation<any>();
  // const [newData, setNewData] = useState([]);
  // AsyncStorage.removeItem('values');

  // const getValues = async () => {
  //   // console.log(localData);
  //   // const x = [fetchData, localData];
  //   setNewData(x);
  // };
  // React.useEffect(() => {
  //   getValues();
  // }, []);

  if (loading) {
    return (
      <View>
        <Text>LOADING...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>ERROR</Text>
      </View>
    );
  }
  function renderItem({item, index}: {item: Simpson; index: number}) {
    return (
      <Pressable
        style={styles.listItem}
        key={index}
        onPress={() => {
          navigation.navigate('SimpsonDetails', {
            params: item,
          });
        }}>
        <Text style={styles.text}>{index + 1}</Text>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: item.avatar}}
        />
        <Text style={styles.text}>{item.name}</Text>
      </Pressable>
    );
  }

  return (
    <>
      <FlatList
        style={styles.flatlist}
        removeClippedSubviews
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        windowSize={1}
        data={fetchData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate('AddNewCharacter')}>
        <Text style={styles.title}>+</Text>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: 'white',
  },
  listItem: {
    flexDirection: 'row',
    height: 50,
    width,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    elevation: 4,
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 40,
    left: 10,
  },
  text: {
    left: 10,
    fontSize: 20,
  },
  button: {
    height: 60,
    width: 55,
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#26653A',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
