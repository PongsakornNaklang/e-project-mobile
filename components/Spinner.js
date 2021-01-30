import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Theme } from '../contexts/theme';

export const Spinner = ({ loading }) => {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={Theme.colors.primary} size={90} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    margin: 20
  }
});