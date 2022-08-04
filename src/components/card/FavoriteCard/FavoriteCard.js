import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

const device = Dimensions.get('window');

const FavoriteCard = ({film, onPress}) => {
  const imageUri = `${Config.API_IMAGE}${film?.poster_path}`;
  const dispatch = useDispatch();

  const deleteFilm = id => {
    dispatch({type: 'REMOVE_FILM', payload: {film: {id}}});
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: imageUri}} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{film.original_title}</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFC319" />
            <Text style={styles.ratingTitle}>{film.vote_average}/10 IMDb</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => deleteFilm(film.id)}>
          <Icon name="delete-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginHorizontal: 5,
    alignItems: 'center',
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
    justifyContent: 'center',
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
});
