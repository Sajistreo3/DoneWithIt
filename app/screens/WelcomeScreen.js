import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  Alert,
  StatusBar,
  Dimensions,
  Platform,
  SafeAreaView,
  Button,
  ImageBackground,
} from 'react-native';

import colors from '../config/colors';


function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell what you dont need</Text>
      </View>
      <View
        style={styles.loginButton}
      ></View>
      <View
        style={styles.registerButton}
      ></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
})

export default WelcomeScreen;