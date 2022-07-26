import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryCard from '../CategoryCard';
import Config from 'react-native-config';
import Genres from '../../../localization/genresData.json';

const device = Dimensions.get('window');

const FilmCard = ({film, onPress}) => {
  const uriImage = `${Config.API_IMAGE}${film.poster_path}`;
  let data = [];

  Genres.genres.forEach((value, index) => {
    if (film.genre_ids.includes(Genres.genres[index].id)) {
      data.push(Genres.genres[index]);
    }
  });

  const renderCategory = ({item}) => <CategoryCard category={item} />;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: uriImage}} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{film.original_title}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFC319" />
            <Text style={styles.ratingTitle}>{film.vote_average}/10 IMDb</Text>
          </View>
          <View style={{marginVertical: 5}}>
            <FlatList data={data} renderItem={renderCategory} horizontal />
          </View>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" size={14} color="black" />
            <Text style={styles.timeTitle}>1h 47m</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FilmCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
  },
  image: {
    width: device.width / 4.6,
    height: device.height / 6,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  titleContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    color: 'black',
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingTitle: {
    color: '#9C9C9C',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeTitle: {
    color: 'black',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 4,
  },
});
