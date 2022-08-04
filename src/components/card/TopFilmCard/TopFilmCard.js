import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from 'react-native-config';

const device = Dimensions.get('window');

const TopFilmCard = ({onPress, topFilm}) => {
  const uriImage = `${Config.API_IMAGE}${topFilm.poster_path}`;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: uriImage}} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {topFilm.original_title}
          </Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFC319" />
            <Text style={styles.ratingTitle}>
              {topFilm.vote_average}/10 IMDb
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default TopFilmCard;

const styles = StyleSheet.create({
  image: {
    height: device.height / 3.5,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  container: {
    margin: 5,
    borderRadius: 5,
    width: device.width / 2.75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    backgroundColor: 'white',
    elevation: 11,
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  titleContainer: {
    marginTop: 5,
    marginLeft: 3,
  },
  imageContainer: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTitle: {
    color: '#9C9C9C',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 5,
  },
});
