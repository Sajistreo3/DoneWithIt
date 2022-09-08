import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../config/colors';


function AppButton({value, onpress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
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

export default AppButton;