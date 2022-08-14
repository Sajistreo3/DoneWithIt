// import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  Alert,
  StatusBar,
  Dimensions,
  Platform,
  SafeAreaView,
  Button
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const handlePress = () => console.log("Text Clicked");
  const { landscape } = useDeviceOrientation();


  return (
    <SafeAreaView style={styles.container}>
      <View
        style={
          {
            backgroundColor: 'dodgerblue',
            width: '100%',
            height: landscape ? '100%' : '30%',
          }
        }
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColore: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
