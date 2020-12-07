import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

export const RoundButton = (props) => {
  return (
    <TouchableHighlight style={styles.button} underlayColor='red' onPress={() => alert('ok')}>
      <Text>{props.title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 10,
    width: 100
  }

});