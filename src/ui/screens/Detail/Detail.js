import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryCard from '../../../components/card/CategoryCard';
import VideoModal from '../../../components/modal/VideoModal';
import useFetchDetail from '../../../hooks/useFetchApi/useFetchDetail';
import Loading from '../../../components/Loading';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

const device = Dimensions.get('window');

const Detail = ({route, navigation}) => {
  const {id} = route.params;
  const {filmDetail, loading, error, videoKey} = useFetchDetail(id);
  const [isModalVisible, setModalVisible] = useState(false);
  const imageUri = `${Config.API_IMAGE}${filmDetail?.poster_path}`;
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onClickBookmark = film => {
    dispatch({type: 'ADD_FILM', payload: {film}});
  };

  const renderCategory = ({item}) => <CategoryCard category={item} />;

  const backHome = () => {
    navigation.goBack();
  };

  if (loading) {
    return <Loading />;
  }

  function timeConvert(n) {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + ' h ' + rminutes + ' m';
  }

  return (
    filmDetail && (
      <View style={styles.container}>
        <Image source={{uri: imageUri}} style={styles.image} />
        <TouchableOpacity style={styles.backIcon} onPress={backHome}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="menu" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} onPress={toggleModal}>
          <Icon name="play" size={30} />
        </TouchableOpacity>
        <View style={styles.detailContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{filmDetail?.original_title}</Text>
            <TouchableOpacity onPress={() => onClickBookmark(filmDetail)}>
              <Icon name="bookmark" size={28} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFC319" />
            <Text style={styles.ratingTitle}>
              {filmDetail?.vote_average}/10 IMDb
            </Text>
          </View>
          <View>
            <VideoModal
              isModalVisible={isModalVisible}
              onCancel={toggleModal}
              videoId={videoKey}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <FlatList
              data={filmDetail?.genres}
              renderItem={renderCategory}
              horizontal
            />
          </View>
          <View style={styles.aboutContainer}>
            <View>
              <Text style={styles.aboutTitle}>Length</Text>
              <Text style={styles.lengthTitle}>
                {timeConvert(filmDetail.runtime)}
              </Text>
            </View>
            <View>
              <Text style={styles.aboutTitle}>Language</Text>
              <Text style={styles.lengthTitle}>
                {filmDetail?.original_language.toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.aboutTitle}>Budget</Text>
              <Text style={styles.lengthTitle}>{filmDetail.budget} $</Text>
            </View>
          </View>
          <ScrollView style={{flex: 1}}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text>{filmDetail.overview}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  );
};

export default Detail;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: device.height / 2.3,
    resizeMode: 'stretch',
  },
  backIcon: {
    position: 'absolute',
    marginLeft: 24,
    marginTop: 20,
  },
  menuIcon: {
    position: 'absolute',
    right: 24,
    top: 20,
  },
  detailContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    top: device.height / 2.5,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 24,
  },
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingTitle: {
    color: '#9C9C9C',
    fontWeight: '400',
    fontSize: 13,
    marginLeft: 5,
  },
  lengthTitle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  aboutTitle: {
    color: '#9C9C9C',
    fontSize: 13,
    fontWeight: '400',
  },
  aboutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  descriptionContainer: {
    marginVertical: 12,
    flex: 1,
  },
  descriptionTitle: {
    fontSize: 16,
    color: '#110E47',
    fontWeight: '800',
  },
  playButton: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
    alignSelf: 'center',
    top: 120,
  },
});
