import {Alert} from 'react-native';

export default function (state, action) {
  switch (action.type) {
    case 'ADD_FILM': {
      const {film} = action.payload;
      const find = state.filmList.find(item => item.id === film.id);
      if (!find) {
        const newFilmList = [...state.filmList, film];
        return {...state, filmList: newFilmList};
      } else {
        Alert.alert('Uyarı', 'Film favorilerde mevcut');
        return state;
      }
    }

    case 'REMOVE_FILM': {
      const {id} = action.payload.film;
      const newFilmList = state.filmList.filter(item => item.id !== id);
      return {...state, filmList: newFilmList};
    }

    default:
      return state;
  }
}
