import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryCard = ({category}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBE3FF',
    margin: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignSelf: 'baseline',
  },
  title: {
    fontSize: 10,
    color: '#88A4E8',
    fontWeight: '700',
    textAlign: 'center',
  },
});
