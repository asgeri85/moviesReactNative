import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const device = Dimensions.get('window');

const FilmCard = () => {
  console.log(device.width);
  console.log(device.height);
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image
          source={require('../TopFilmCard/image.jpg')}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Spiderman: No Way Home</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFC319" />
            <Text style={styles.ratingTitle}>9.1/10 IMDb</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
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
});
