import {useState, useCallback} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetchApi = () => {
  const [nowFilm, setNowFilm] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [topFilm, setTopFilm] = useState();

  const getNowShownFilm = useCallback(async () => {
    try {
      const {data: response} = await axios.get(
        `${Config.API_URL}/now_playing`,
        {
          params: {
            api_key: Config.API_KEY,
            page: '1',
          },
        },
      );
      setNowFilm(response.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [nowFilm]);

  const getTopFilm = useCallback(async () => {
    try {
      const {data: response} = await axios.get(`${Config.API_URL}/top_rated`, {
        params: {
          api_key: Config.API_KEY,
          page: '1',
        },
      });
      setTopFilm(response.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return {
    getNowShownFilm,
    nowFilm,
    loading,
    error,
    topFilm,
    getTopFilm,
  };
};

export default useFetchApi;
