import React from 'react';
import Lottie from 'lottie-react-native';

export default function Animation() {
  return <Lottie source={require('../../assets/loading.json')} autoPlay loop />;
}
