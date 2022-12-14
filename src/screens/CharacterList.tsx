import React from 'react';
import {useNavigation} from '@react-navigation/native';
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
import {useDispatch, useSelector} from 'react-redux';
import {deleteCharacter, updateLocation} from '../redux/CharacterReducer';

interface CharacterListProps {}

const URL = 'https://5fc9346b2af77700165ae514.mockapi.io/simpsons';

const {width} = Dimensions.get('window');

export const CharacterList: React.FC<CharacterListProps> = ({}) => {
  const {loading, error} = useFetch(URL);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const characterList = useSelector(state => state.character.value);
  const flatData = characterList.flat();
  if (loading) {
    return (
      <View style={styles.center}>
        <Text>LOADING...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.center}>
        <Text>ERROR</Text>
      </View>
    );
  }
  const shiftDownIndex = (index: number) => {
    const x = flatData[index];
    const y = flatData[index + 1];
    dispatch(updateLocation({x, y}));
  };
  const shiftUpIndex = (index: number) => {
    const x = flatData[index];
    const y = flatData[index - 1];
    dispatch(updateLocation({x, y}));
  };
  function renderItem({item, index}: {item: Simpson; index: number}) {
    return (
      <>
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
            source={{uri: item?.avatar}}
          />
          <Text style={styles.text}>{item?.name}</Text>
          <View style={styles.containerbuttons}>
            <Pressable
              onPress={() => {
                dispatch(deleteCharacter({id: item.id}));
              }}>
              <Text style={styles.trash}>???????</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                shiftDownIndex(index);
              }}>
              <Text style={[styles.trash]}>??????</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                shiftUpIndex(index);
              }}>
              <Text style={styles.trash}>??????</Text>
            </Pressable>
          </View>
        </Pressable>
      </>
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
        data={flatData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate('AddNewCharacter', {
            params: flatData.length,
          });
        }}>
        <Text style={styles.title}>+</Text>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  containerbuttons: {
    height: 30,
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
  },
  trash: {
    right: 10,
    fontSize: 20,
    paddingEnd: 5,
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
