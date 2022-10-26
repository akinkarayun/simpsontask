import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

interface CharacterListDetailsProps {}

const {width} = Dimensions.get('window');

export const CharacterListDetails: React.FC<CharacterListDetailsProps> = (
  route: any,
) => {
  const {params} = route.route.params;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: params.avatar}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{params.name}</Text>
        <Text style={styles.textJob}>{params.job}</Text>
      </View>

      <Text style={styles.text}>{params.description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textContainer: {
    width,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height: 300,
  },
  textName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  textJob: {
    fontSize: 22,
  },
  text: {
    fontSize: 14,
    padding: 15,
    textAlign: 'justify',
  },
});
