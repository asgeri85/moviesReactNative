import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import FavoriteCard from '../../../components/card/FavoriteCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Favorites = () => {
  const favorites = useSelector(selector => selector.filmList);

  const renderFavorite = ({item}) => <FavoriteCard film={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.toolBarContainer}>
        <Icon name="menu" size={25} color="#110E47" />
        <Text style={styles.barTitle}>Favoriler</Text>
        <Icon name="bell-badge-outline" size={25} color="#110E47" />
      </View>
      <FlatList
        data={favorites}
        renderItem={renderFavorite}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  toolBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
  },
  barTitle: {
    color: '#110E47',
    fontSize: 16,
    fontWeight: '800',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});
