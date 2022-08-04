import axios from 'axios';
import {useCallback, useState, useEffect} from 'react';
import Config from 'react-native-config';

const useFetchDetail = id => {
  const [filmDetail, setFilmDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [videoKey, setVideoKey] = useState();

  useEffect(() => {
    getFilmDetailData();
    getFilmVideo();
  }, []);

  const getFilmDetailData = useCallback(async () => {
    try {
      await axios
        .get(`${Config.API_URL}/${id}`, {
          params: {
            api_key: Config.API_KEY,
          },
        })
        .then(({data}) => {
          setFilmDetail(data);
        });
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [id]);

  const getFilmVideo = useCallback(async () => {
    try {
      await axios
        .get(`${Config.API_URL}/${id}/videos`, {
          params: {
            api_key: Config.API_KEY,
          },
        })
        .then(({data}) => {
          setVideoKey(data.results[0].key);
        });
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [id]);

  return {
    filmDetail,
    loading,
    error,
    videoKey,
  };
};

export default useFetchDetail;
