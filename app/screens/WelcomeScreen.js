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
import AppButton from '../components/AppButton';

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
      <View style={styles.buttonContainer}>
        <AppButton value='Login' onPress={() => console.log("Login Pressed")} />
        <AppButton color='secondary' value='Register' onPress={() => console.log("Register Pressed")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
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