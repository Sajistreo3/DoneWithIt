// import { StatusBar } from 'expo-status-bar'
import TestScreen from './app/screens/testScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container} >
    //   <AppButton value='Login' onPress={() => console.log("Button Pressed")} />
    // </View>
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
});
