import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopFilmCard from '../../../components/card/TopFilmCard';
import FilmCard from '../../../components/card/FilmCard';

const Home = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderTopFilm = ({item}) => <TopFilmCard />;

  return (
    <View style={styles.container}>
      <View style={styles.toolBarContainer}>
        <Icon name="menu" size={25} color="#110E47" />
        <Text style={styles.barTitle}>Filmler</Text>
        <Icon name="bell-badge-outline" size={25} color="#110E47" />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.barTitle}>Now Showing</Text>
        <TouchableOpacity style={styles.headerButtonContainer}>
          <Text>See More</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 5}}>
        <FlatList
          data={DATA}
          renderItem={renderTopFilm}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.barTitle}>Popular</Text>
        <TouchableOpacity style={styles.headerButtonContainer}>
          <Text>See More</Text>
        </TouchableOpacity>
      </View>
      <FilmCard />
    </View>
  );
};

export default Home;

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
    marginHorizontal: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  headerButtonContainer: {
    borderWidth: 1,
    borderColor: '#9C9C9C',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
