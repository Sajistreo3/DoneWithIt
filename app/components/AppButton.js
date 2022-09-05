import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../config/colors';


export default function AppButton({value}) {
  return (
    <View styles={styles.button}>
        <Text style={styles.text}>This is also working</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

