import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopFilmCard from '../../../components/card/TopFilmCard';
import FilmCard from '../../../components/card/FilmCard';
import useFetchApi from '../../../hooks/useFetchApi/useFetchApi';
import Loading from '../../../components/Loading';

const Home = ({navigation}) => {
  const {getNowShownFilm, nowFilm, loading, error, getTopFilm, topFilm} =
    useFetchApi();

  useEffect(() => {
    getNowShownFilm();
    getTopFilm();
  }, []);

  const renderTopFilm = ({item}) => (
    <TopFilmCard onPress={() => onClickFilm(item)} topFilm={item} />
  );

  const renderFilm = ({item}) => (
    <FilmCard film={item} onPress={() => onClickFilm(item)} />
  );

  const onClickFilm = film => {
    navigation.navigate('DetailScreen', {id: film.id});
  };

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.toolBarContainer}>
        <Icon name="menu" size={25} color="#110E47" />
        <Text style={styles.barTitle}>Filmler</Text>
        <Icon name="bell-badge-outline" size={25} color="#110E47" />
      </View>
      {loading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.barTitle}>Now Showing</Text>
            <TouchableOpacity style={styles.headerButtonContainer}>
              <Text>See More</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 5}}>
            <FlatList
              data={nowFilm}
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
          <FlatList
            data={topFilm}
            renderItem={renderFilm}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
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
