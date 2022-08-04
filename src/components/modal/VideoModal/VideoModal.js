import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoModal = ({isModalVisible, onCancel, videoId}) => {
  return (
    videoId && (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={onCancel}
        onBackButtonPress={onCancel}
        onSwipeCancel={onCancel}>
        <View style={styles.container}>
          <YoutubePlayer videoId={videoId} height={'100%'} />
        </View>
      </Modal>
    )
  );
};

export default VideoModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '50%',
  },
});
